import requests
import json
import csv
import pymongo
from pymongo import MongoClient
from tqdm import *

def convertToCost(cost):
    tempCost = cost + cost[len(str(cost)) - 1]
    listCost = list(tempCost)
    listCost[len(listCost) - 2] = "."

    return "".join(listCost)

#Fantasy Premier League API
FPL_ALL = "https://fantasy.premierleague.com/drf/bootstrap-static"
PLAYER_INFO = "https://fantasy.premierleague.com/drf/element-summary/"
PLAYER_IMG = "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p"

#Mapping between team ID and team name

idToClubMapping = {
    3: "ARS",
    91: "BOU",
    36: "BHA",
    90: "BUR",
    8: "CHE",
    31: "CRY",
    11: "EVE",
    38: "HUD",
    13: "LEI",
    14: "LIV",
    43: "MCI",
    1: "MUN",
    4: "NEW",
    20: "SOU",
    110: "STK",
    80: "SWA",
    6: "TOT",
    57: "WAT",
    35: "WBA",
    21: "WHU"
}

playerToClubMapping = {
    1: "ARS",
    2: "BOU",
    3: "BHA",
    4: "BUR",
    5: "CHE",
    6: "CRY",
    7: "EVE",
    8: "HUD",
    9: "LEI",
    10: "LIV",
    11: "MCI",
    12: "MUN",
    13: "NEW",
    14: "SOU",
    15: "STK",
    16: "SWA",
    17: "TOT",
    18: "WAT",
    19: "WBA",
    20: "WHU"
}

elementToPositionMapping = {
    1: "Goalkeeper",
    2: "Defender",
    3: "Midfielder",
    4: "Forward"
}

#Connect to mongodb
# client = MongoClient('localhost', 27017)
mongodb_uri =  "mongodb://joeka36:GFCcpLBJ36@localhost:27017/fantasy_premier_league?authSource=admin"
client = MongoClient(mongodb_uri)
db = client["fantasy_premier_league"]
db.authenticate("joeka36", "GFCcpLBJ36")
playersCollection = db.players

#Get all players data summary
response = requests.get(FPL_ALL)
allPlayers = response.json()

#For each players summary, get comprehensive data
for element in tqdm(allPlayers["elements"]):
    count = 0
    name = element["first_name"] + " " + element["second_name"]
    position = elementToPositionMapping[element["element_type"]]
    team = idToClubMapping[element["team_code"]]
    squad_number = element["squad_number"]
    img_ref = PLAYER_IMG + str(element["code"]) + ".png"
    cost = convertToCost(str(element["now_cost"]))
    selected_by = float(element["selected_by_percent"])
    form = float(element["form"])
    transfer_out = element["transfers_out_event"]
    transfer_in = element["transfers_in_event"]
    total_points = element["total_points"]
    event_points = element["event_points"]
    ppg = float(element["points_per_game"])
    goals_scored = element["goals_scored"]
    assists = element["assists"]
    clean_sheets = element["clean_sheets"]
    goals_conceded = element["goals_conceded"]
    ep_this = float(element["ep_this"])
    ep_next = float(element["ep_next"])
    influence = float(element["influence"])
    creativity = float(element["creativity"])
    threat = float(element["threat"])
    ict_index = float(element["ict_index"])
    season_points = []
    season_name = []
    past_fixtures_points = []
    fixtures = []

    #Get specific player comprehensive data
    playerResponse = requests.get(PLAYER_INFO + str(element['id']))
    playerInfo = playerResponse.json()

    for history in playerInfo["history_past"]:
        season_points.append(history["total_points"])
        season_name.append(history["season_name"])


    for games in playerInfo["history_summary"]:
        past_fixtures_points.append(games["total_points"])
        clubName = playerToClubMapping[games["opponent_team"]]
        # print(idToClubMapping[games["opponent_team"]])
        fixtures.append(clubName)

    for fixture in playerInfo['fixtures']:
        if(count > 1):
            break

        fixtures.append(fixture["opponent_short_name"])
        count += 1

    #Update entry if found
    if(playersCollection.find_one({"name": name})):
        playersCollection.update_one({
            "name": name
            }, {
            '$set': {
                "cost": cost,
                "selected_by_percent": selected_by,
                "form": form,
                "transfer_out_event": transfer_out,
                "transfer_in_event": transfer_in,
                "total_points": total_points,
                "event_points": event_points,
                "ppg": ppg,
                "goals_scored": goals_scored,
                "assists": assists,
                "clean_sheets": clean_sheets,
                "goals_conceded": goals_conceded,
                "ep_this": ep_this,
                "ep_next": ep_next,
                "influence": influence,
                "creativity": creativity,
                "threat": threat,
                "ict_index": ict_index,
                "season_points": season_points,
                "season_name": season_name,
                "past_fixtures_points": past_fixtures_points,
                "fixtures": fixtures
            }
        }, upsert=False)
        # print("Found")

    #Insert player into db
    else:
        newPlayer = {
          "name": name,
          "position": position,
          "team" : team,
          "squad_number": squad_number,
          "img": img_ref,
          "cost": cost,
          "selected_by_percent": selected_by,
          "form": form,
          "transfer_out_event": transfer_out,
          "transfer_in_event": transfer_in,
          "total_points": total_points,
          "event_points": event_points,
          "ppg": ppg,
          "goals_scored": goals_scored,
          "assists": assists,
          "clean_sheets": clean_sheets,
          "goals_conceded": goals_conceded,
          "ep_this": ep_this,
          "ep_next": ep_next,
          "influence": influence,
          "creativity": creativity,
          "threat": threat,
          "ict_index": ict_index,
          "season_points": season_points,
          "season_name": season_name,
          "past_fixtures_points": past_fixtures_points,
          "fixtures": fixtures
        }

        playersCollection.insert_one(newPlayer)


#Player Model
# player = {"name": "Roberto Firmino",
#           "squad_number": 9,
#           "cost": 90,
#           "selected_by_percent": "20.7",
#           "form": "8.0",
#           "transfer_out_event": 5608,
#           "transfer_in_event": 102142,
#           "total_points": 34,
#           "event_points": 14,
#           "ppg": "8.7",
#           "ppg": ppg,
            # "goals_scored": 2,
            # "assists": 2,
            # "clean_sheets": 2,
            # "goals_conceded": 5,
#           "ep_this": "8.7",
#           "ep_next": "8.7",
#           "influence": "131.6",
#           "creativity": "84.4",
#           "threat": "104.0",
#           "ict_index": "32.1",
#           "season_points" = [180, 250, 310],
#           "season_name" = ["2014/15", "2015/16", "2016/17"]
#           "past_fixtures_points" = [13, 14, 12]
#           "fixtures" = []

# idToClubMapping = {
#     3: ["Arsenal", "ARS"],
#     91: ["Bournemouth", "BOU"],
#     36: ["Brighton", "BHA"],
#     90: ["Burnley", "BUR"],
#     8: ["Chelsea", "CHE"],
#     31: ["Crystal Palace", "CRY"],
#     11: ["Everton", "EVE"],
#     38: ["Huddersfield", "HUD"],
#     13: ["Leicester", "LEI"],
#     14: ["Liverpool", "LIV"],
#     43: ["Manchester City", "MCI"],
#     1: ["Manchester United", "MUN"],
#     4: ["Newcastle", "NEW"],
#     20: ["Southampton", "SOU"],
#     110: ["Stoke", "STK"],
#     80: ["Swansea City", "SWA"],
#     6: ["Spurs", "TOT"],
#     57: ["Watford", "WAT"],
#     35: ["West Brom", "WBA"],
#     21: ["West Ham United", "WHU"]
# }

# playerToClubMapping = {
#     1: ["Arsenal", "ARS"],
#     2: ["Bournemouth", "BOU"],
#     3: ["Brighton", "BHA"],
#     4: ["Burnley", "BUR"],
#     5: ["Chelsea", "CHE"],
#     6: ["Crystal Palace", "CRY"],
#     7: ["Everton", "EVE"],
#     8: ["Huddersfield", "HUD"],
#     9: ["Leicester", "LEI"],
#     10: ["Liverpool", "LIV"],
#     11: ["Manchester City", "MCI"],
#     12: ["Manchester United", "MUN"],
#     13: ["Newcastle", "NEW"],
#     14: ["Southampton", "SOU"],
#     15: ["Stoke", "STK"],
#     16: ["Swansea City", "SWA"],
#     17: ["Spurs", "TOT"],
#     18: ["Watford", "WAT"],
#     19: ["West Brom", "WBA"],
#     20: ["West Ham United", "WHU"]
# }