import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayerService } from './player/player.service';
import { Player } from './player/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected searchStr: string;
  protected player: string;
  protected dataService: CompleterData;
  protected searchPlayer: Player;
  protected players:Player[] = [];
  protected playersName:string[];
  // protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];

  constructor(private route: ActivatedRoute, private router: Router, private playerService:PlayerService) {}

  ngOnInit(){
    this.playerService.getPlayersNameArray()
    .subscribe(
        (playerNames: string[]) => {
          // console.log(playerNames);
          this.playersName = playerNames;
        }
      );
    // console.log(this.playersName[1]);
  }

  public onSelected(selected: CompleterItem) {
    if (selected) {
        // console.log(selected.title);
        this.playerService.getPlayerByName(selected.title)
        .subscribe(
          (searchPlayer: Player) => {
            this.searchPlayer = searchPlayer;
          }
         );
        // console.log(this.searchPlayer.playerID);
        this.router.navigate(['player', this.searchPlayer.playerID]);
      } 
  }
}
