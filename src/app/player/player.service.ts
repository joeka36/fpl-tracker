import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  private players: Player[] = [
    new Player(
      "Roberto Firmino",
      9,
      90,
      20.7,
      "8.0",
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
      "Sadio Mane",
      27,
      95,
      "20.7",
      "8.0",
      6600,
      192142,
      50,
      18,
      "9.7",
      3,
      2,
      2,
      5,
      "9.7",
      "12.7",
      "150.6",
      "90.4",
      "102.0",
      "35.1",
      [180, 250, 310],
      ["2014/15", "2015/16", "2016/17"],
      [13, 14, 12],
      ["WAT", "SWA", "ARS", "MCI"]
   )
  ]


  getAllPlayers() {
    return this.players;
  }

  getPlayerByID(id:string) {

  }
}
