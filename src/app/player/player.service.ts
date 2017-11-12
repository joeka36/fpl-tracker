import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  private playersName: string[] = [
    "Roberto Firmino",
    "Sadio Mane",
    "Mohamad Salah",
    "Daniel Sturridge",
    "Jordan Henderson"
  ]

  private players: Player[] = [
    new Player(
      "1",
      "Roberto Firmino",
      "FWD",
      "Liverpool",
      9,
      "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p92217.png",
      90,
      20.7,
      8.0,
      5608,
      102142,
      34,
      14,
      8.7,
      2,
      2,
      2,
      5,
      8.7,
      8.7,
      131.6,
      84.4,
      104.0,
      32.1,
      [180, 250, 310],
      ["2014/15", "2015/16", "2016/17"],
      [13, 14, 12],
      ["WAT", "SWA", "ARS", "MCI"]
   ),

    new Player(
      "2",
      "Sadio Mane",
      "MD",
      "Liverpool",
      19,
      "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p110979.png",
      95,
      25.7,
      8.0,
      5600,
      192142,
      50,
      18,
      9.7,
      3,
      2,
      2,
      5,
      10.7,
      12.7,
      150.6,
      90.4,
      102.0,
      35.1,
      [180, 250, 310],
      ["2014/15", "2015/16", "2016/17"],
      [13, 14, 12],
      ["WAT", "SWA", "ARS", "MCI"]
   ),

   new Player(
     "3",
      "Mohamad Salah",
      "MD",
      "Liverpool",
      11,
      "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p118748.png",
      95,
      18.4,
      8.0,
      7600,
      157102,
      50,
      18,
      9.7,
      3,
      2,
      2,
      5,
      9.7,
      12.7,
      150.6,
      90.4,
      102.0,
      35.1,
      [180, 250, 310],
      ["2014/15", "2015/16", "2016/17"],
      [13, 14, 12],
      ["WAT", "SWA", "ARS", "MCI"]
   ),

   new Player(
     "4",
      "Daniel Sturridge",
      "FWD",
      "Liverpool",
      15,
      "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p40755.png",
      95,
      12.1,
      8.0,
      9600,
      121002,
      50,
      18,
      9.7,
      3,
      2,
      2,
      5,
      9.7,
      12.7,
      150.6,
      90.4,
      102.0,
      35.1,
      [180, 250, 310],
      ["2014/15", "2015/16", "2016/17"],
      [13, 14, 12],
      ["WAT", "SWA", "ARS", "MCI"]
   ),

   new Player(
     "5",
      "Jordan Henderson",
      "MD",
      "Liverpool",
      14,
      "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p56979.png",
      95,
      8.1,
      8.0,
      12600,
      91002,
      50,
      18,
      9.7,
      3,
      2,
      2,
      5,
      9.7,
      12.7,
      150.6,
      90.4,
      102.0,
      35.1,
      [180, 250, 310],
      ["2014/15", "2015/16", "2016/17"],
      [13, 14, 12],
      ["WAT", "SWA", "ARS", "MCI"]
   ),
  ]


  getAllPlayers() {
    return this.players;
  }

  getPlayerByID(id:string) {
    //return this.players[id];
    for (var i = this.players.length - 1; i >= 0; i--) {
      if(this.players[i].playerID === id)
        return this.players[i];
    }
  }

  getPlayerByIndex(index: number){
    return this.players.slice()[index];
  }

  getBestPlayer() {
    return this.players.slice()[1];
  }

  getTopTransfersIn() {
    return this.players.slice();
  }

  getTopTransfersOut() {
    return this.players.slice();
  }

  getTopSelectedPlayers() {
    return this.players.slice(0,3);
  }

  getTopSelectedPlayersByIndex(index:number) {
    return this.players.slice(0,3)[index];
  }

  getPlayersNameArray() {
    return this.playersName.slice();
  }

  getPlayerByName(name:string) {
    for (var i = this.players.length - 1; i >= 0; i--) {
      if(this.players[i].name === name)
        return this.players[i]
    }
  }
}
