import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PlayerService {

  constructor(private http:Http){}

  private playersName: string[] = [];
  private players: Player[] = [];

  getAllPlayers() {
    return this.players;
  }

  getPlayerByID(id:string) {
    return this.http.get('http://localhost:3000/api/player/' + id)
      .map((response: Response) => {
        const player = response.json().foundPlayer;
        let transformedPlayer: Player;

        transformedPlayer = new Player(player._id, player.name, player.position,
          player.team, player.squad_number, player.img, player.cost,
          player.selected_by_percent, player.form, player.transfer_out_event,
          player.transfer_in_event, player.total_points, player.event_points,
          player.ppg, player.goals_scored, player.assists, player.clean_sheets,
          player.goals_conceded, player.ep_this, player.ep_next, player.influence,
          player.creativity, player.threat, player.ict_index, player.season_points,
          player.season_name, player.past_fixtures_points, player.fixtures);

        return transformedPlayer;
      })
      .catch((error: Response) => Observable.throw(error.json()));
    //return this.players[id];
    // for (var i = this.players.length - 1; i >= 0; i--) {
    //   if(this.players[i].playerID === id)
    //     return this.players[i];
    // }
  }

  getPlayerByIndex(index: number){
    return this.players.slice()[index];
  }

  getBestPlayer() {
    return this.http.get('http://localhost:3000/api')
      .map((response: Response) => {
        const player = response.json().topPlayer[0];

        // console.log(player.name);
        let transformedTopPlayer: Player;
        
        transformedTopPlayer = new Player(player._id, player.name, player.position,
          player.team, player.squad_number, player.img, player.cost,
          player.selected_by_percent, player.form, player.transfer_out_event,
          player.transfer_in_event, player.total_points, player.event_points,
          player.ppg, player.goals_scored, player.assists, player.clean_sheets,
          player.goals_conceded, player.ep_this, player.ep_next, player.influence,
          player.creativity, player.threat, player.ict_index, player.season_points,
          player.season_name, player.past_fixtures_points, player.fixtures);

        // console.log("HERE");
        console.log(transformedTopPlayer);
        return transformedTopPlayer;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getTopTransfersIn() {
    return this.http.get('http://localhost:3000/api')
      .map((response: Response) => {
        const topInPlayers = response.json().topIn;
        let transformedTopIn: Player[] = [];

        for(let player of topInPlayers) {
          transformedTopIn.push(new Player(player._id, player.name, player.position,
          player.team, player.squad_number, player.img, player.cost,
          player.selected_by_percent, player.form, player.transfer_out_event,
          player.transfer_in_event, player.total_points, player.event_points,
          player.ppg, player.goals_scored, player.assists, player.clean_sheets,
          player.goals_conceded, player.ep_this, player.ep_next, player.influence,
          player.creativity, player.threat, player.ict_index, player.season_points,
          player.season_name, player.past_fixtures_points, player.fixtures));
        }

        return transformedTopIn;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getTopTransfersOut() {
    return this.http.get('http://localhost:3000/api')
      .map((response: Response) => {
        const topOutPlayers = response.json().topOut;
        let transformedTopOut: Player[] = [];

        console.log(topOutPlayers);

        for(let player of topOutPlayers) {
          transformedTopOut.push(new Player(player._id, player.name, player.position,
          player.team, player.squad_number, player.img, player.cost,
          player.selected_by_percent, player.form, player.transfer_out_event,
          player.transfer_in_event, player.total_points, player.event_points,
          player.ppg, player.goals_scored, player.assists, player.clean_sheets,
          player.goals_conceded, player.ep_this, player.ep_next, player.influence,
          player.creativity, player.threat, player.ict_index, player.season_points,
          player.season_name, player.past_fixtures_points, player.fixtures));
        }
        
        console.log(transformedTopOut);

        return transformedTopOut;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getTopSelectedPlayers() {
    
  }

  getTopSelectedPlayersByIndex(index:number) {
    return this.http.get('http://localhost:3000/api')
      .map((response: Response) => {
        const topSelectedPlayers = response.json().topSelecteds;
        let transformedTopSelected: Player;
        let player = topSelectedPlayers[index];
        console.log(player);

        transformedTopSelected = new Player(player._id, player.name, player.position,
          player.team, player.squad_number, player.img, player.cost,
          player.selected_by_percent, player.form, player.transfer_out_event,
          player.transfer_in_event, player.total_points, player.event_points,
          player.ppg, player.goals_scored, player.assists, player.clean_sheets,
          player.goals_conceded, player.ep_this, player.ep_next, player.influence,
          player.creativity, player.threat, player.ict_index, player.season_points,
          player.season_name, player.past_fixtures_points, player.fixtures);

        return transformedTopSelected;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPlayersNameArray() {
    return this.http.get('http://localhost:3000/api')
      .map((response: Response) => {
        const names = response.json().playerNames;
        // console.log(names);
        let transformedNames: string[] = [];
        for (let playerName of names) {
          transformedNames.push(playerName.name);
        }
        // console.log("After loop");
        this.playersName = transformedNames;
        return this.playersName;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPlayerByName(name:string) {
    return this.http.get('http://localhost:3000/api')
      .map((response: Response) => {
        const allPlayers = response.json().allPlayers;
        let transformedPlayers: Player;

        for(let player of allPlayers) {
          if(player.name === name){
            transformedPlayers = new Player(player._id, player.name, player.position,
            player.team, player.squad_number, player.img, player.cost,
            player.selected_by_percent, player.form, player.transfer_out_event,
            player.transfer_in_event, player.total_points, player.event_points,
            player.ppg, player.goals_scored, player.assists, player.clean_sheets,
            player.goals_conceded, player.ep_this, player.ep_next, player.influence,
            player.creativity, player.threat, player.ict_index, player.season_points,
            player.season_name, player.past_fixtures_points, player.fixtures);
          }       
        }
        
        return transformedPlayers;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  // private playersName: string[] = [
  //   "Roberto Firmino",
  //   "Sadio Mane",
  //   "Mohamad Salah",
  //   "Daniel Sturridge",
  //   "Jordan Henderson"
  // ]

  // private players: Player[] = [
  //   new Player(
  //     "1",
  //     "Roberto Firmino",
  //     "FWD",
  //     "Liverpool",
  //     9,
  //     "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p92217.png",
  //     90,
  //     20.7,
  //     8.0,
  //     5608,
  //     102142,
  //     34,
  //     14,
  //     8.7,
  //     2,
  //     2,
  //     2,
  //     5,
  //     8.7,
  //     8.7,
  //     131.6,
  //     84.4,
  //     104.0,
  //     32.1,
  //     [180, 250, 310],
  //     ["2014/15", "2015/16", "2016/17"],
  //     [13, 14, 12],
  //     ["WAT", "SWA", "ARS", "MCI"]
  //  ),

   //  new Player(
   //    "2",
   //    "Sadio Mane",
   //    "MD",
   //    "Liverpool",
   //    19,
   //    "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p110979.png",
   //    95,
   //    25.7,
   //    8.0,
   //    5600,
   //    192142,
   //    50,
   //    18,
   //    9.7,
   //    3,
   //    2,
   //    2,
   //    5,
   //    10.7,
   //    12.7,
   //    150.6,
   //    90.4,
   //    102.0,
   //    35.1,
   //    [180, 250, 310],
   //    ["2014/15", "2015/16", "2016/17"],
   //    [13, 14, 12],
   //    ["WAT", "SWA", "ARS", "MCI"]
   // ),

  //  new Player(
  //    "3",
  //     "Mohamad Salah",
  //     "MD",
  //     "Liverpool",
  //     11,
  //     "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p118748.png",
  //     95,
  //     18.4,
  //     8.0,
  //     7600,
  //     157102,
  //     50,
  //     18,
  //     9.7,
  //     3,
  //     2,
  //     2,
  //     5,
  //     9.7,
  //     12.7,
  //     150.6,
  //     90.4,
  //     102.0,
  //     35.1,
  //     [180, 250, 310],
  //     ["2014/15", "2015/16", "2016/17"],
  //     [13, 14, 12],
  //     ["WAT", "SWA", "ARS", "MCI"]
  //  ),

  //  new Player(
  //    "4",
  //     "Daniel Sturridge",
  //     "FWD",
  //     "Liverpool",
  //     15,
  //     "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p40755.png",
  //     95,
  //     12.1,
  //     8.0,
  //     9600,
  //     121002,
  //     50,
  //     18,
  //     9.7,
  //     3,
  //     2,
  //     2,
  //     5,
  //     9.7,
  //     12.7,
  //     150.6,
  //     90.4,
  //     102.0,
  //     35.1,
  //     [180, 250, 310],
  //     ["2014/15", "2015/16", "2016/17"],
  //     [13, 14, 12],
  //     ["WAT", "SWA", "ARS", "MCI"]
  //  ),

  //  new Player(
  //    "5",
  //     "Jordan Henderson",
  //     "MD",
  //     "Liverpool",
  //     14,
  //     "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p56979.png",
  //     95,
  //     8.1,
  //     8.0,
  //     12600,
  //     91002,
  //     50,
  //     18,
  //     9.7,
  //     3,
  //     2,
  //     2,
  //     5,
  //     9.7,
  //     12.7,
  //     150.6,
  //     90.4,
  //     102.0,
  //     35.1,
  //     [180, 250, 310],
  //     ["2014/15", "2015/16", "2016/17"],
  //     [13, 14, 12],
  //     ["WAT", "SWA", "ARS", "MCI"]
  //  ),
  // ]
}
