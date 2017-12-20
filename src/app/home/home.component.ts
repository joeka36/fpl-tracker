import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayerService } from '../player/player.service';
import { Player } from '../player/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected searchStr: string;
  protected player: string;
  protected dataService: CompleterData;
  protected searchPlayer: Player;
  protected players:Player[] = [];
  protected playersName:string[];

  constructor(private route: ActivatedRoute, private router: Router, private playerService:PlayerService) {}

  ngOnInit(){
    this.playerService.getPlayersNameArray()
    .subscribe(
        (playerNames: string[]) => {
          this.playersName = playerNames;
        }
      );

    // this.playersName = this.playerService.getPlayersNameArray();
    // console.log(this.playersName[1]);
  }

  public onSelected(selected: CompleterItem) {
    if (selected) {
        this.playerService.getPlayerByName(selected.title)
        .subscribe(
          (searchPlayer: Player) => {
            this.searchPlayer = searchPlayer;
          }
        );

        // this.searchPlayer = this.playerService.getPlayerByName(selected.title);
        // console.log(this.searchPlayer.playerID);
        this.router.navigate(['player', this.searchPlayer.playerID]);
      } 
  }
}
