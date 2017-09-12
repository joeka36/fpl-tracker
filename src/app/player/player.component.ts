import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayerService } from './player.service';
import { Player } from './player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  protected searchStr: string;
  protected player: string;
  protected dataService: CompleterData;
  protected searchPlayer: Player;
  protected players:Player[] = [];
  protected playersName:string[];
  // protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];

  constructor(private route: ActivatedRoute, private router: Router, private playerService:PlayerService) {}

  ngOnInit(){
    this.playersName = this.playerService.getPlayersNameArray();
    // console.log(this.playersName[1]);
  }

  public onSelected(selected: CompleterItem) {
    if (selected) {
        // console.log(selected.title);
        this.searchPlayer = this.playerService.getPlayerByName(selected.title);
        // console.log(this.searchPlayer.playerID);
        this.router.navigate(['player', this.searchPlayer.playerID]);
      } 
 }

}
