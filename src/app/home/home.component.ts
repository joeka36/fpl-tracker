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
  searchStr: string;
  player: string;
  dataService: CompleterData;
  searchPlayerID: string;
  players:Player[] = [];
  playersName:string[];

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
      // console.log(selected.title);
        this.playerService.getPlayerByName(selected.title)
        .subscribe(
          (searchPlayer: Player) => {
            // console.log(searchPlayer);
            this.searchPlayerID = searchPlayer.playerID;
            console.log(this.searchPlayerID);
            this.router.navigate(['player', this.searchPlayerID]);
          }
        );

        // this.searchPlayer = this.playerService.getPlayerByName(selected.title);
        console.log(this.searchPlayerID);
        
        // this.router.navigate(['player', 1]);
      } 
  }
}
