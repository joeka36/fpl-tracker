import { Component, OnInit, DoCheck } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { ActivatedRoute, Router, Params } from '@angular/router';

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
  protected selectedPlayer: Player;
  protected playerID: string;

  public chartColorsOne: any[] = [
      { 
        backgroundColor:"#FFC1CE",
        borderColor: "#FF6384",
        pointBackgroundColor: "#FF6384",
        pointBorderColor: "#FFFFFF" 
      }];

  public chartColorsTwo: any[] = [
      { 
        backgroundColor:"#ffef7c",
        borderColor: "#ffea5e",
        pointBackgroundColor: "#ffea5e",
        pointBorderColor: "#FFFFFF" 
      }];
  // protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];

  constructor(private route: ActivatedRoute, private router: Router, private playerService:PlayerService) {}

  ngOnInit(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.playerID = params['id'];
        }
      );

    this.playersName = this.playerService.getPlayersNameArray();
    this.selectedPlayer = this.playerService.getPlayerByID(this.playerID);
    // console.log(this.playersName[1]);
  }

  ngDoCheck(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.playerID = params['id'];
        }
      );

    this.playersName = this.playerService.getPlayersNameArray();
    this.selectedPlayer = this.playerService.getPlayerByID(this.playerID);
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
