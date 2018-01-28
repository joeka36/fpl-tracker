import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { PlayerService } from '../player.service';
import { Player } from '../player.model';
@Component({
  selector: 'app-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.css']
})
export class PlayerSummaryComponent implements OnInit, OnChanges {

  protected selectedPlayer: Player;
  protected playerID: string;

  constructor(private route: ActivatedRoute, private router: Router, private playerService:PlayerService) {}

  ngOnInit(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.playerID = params['id'];
        }
      );

    this.playerService.getPlayerByID(this.playerID)
      .subscribe(
        (player: Player) => {
          this.selectedPlayer = player;
        }
       );
    // this.selectedPlayer = this.playerService.getPlayerByID(this.playerID);
    // console.log(this.playersName[1]);
  }

  ngOnChanges(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.playerID = params['id'];
        }
      );

    this.playerService.getPlayerByID(this.playerID)
      .subscribe(
        (player: Player) => {
          this.selectedPlayer = player;
        }
       );
    // this.selectedPlayer = this.playerService.getPlayerByID(this.playerID);
  }
}
