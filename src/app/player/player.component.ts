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

  searchStr: string;
  player: string;
  dataService: CompleterData;
  searchPlayer: Player;
  players:Player[] = [];
  playersName:string[];
  selectedPlayer: Player;
  playerID: string;

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

    this.playerService.getPlayersNameArray()
    .subscribe(
        (playerNames: string[]) => {
          this.playersName = playerNames;
        }
      );

    this.playerService.getPlayerByID(this.playerID)
      .subscribe(
        (player: Player) => {
          this.selectedPlayer = player;
        }
       );
    // this.selectedPlayer = this.playerService.getPlayerByID(this.playerID);
    console.log(this.playerID);
  }

  public onSelected(selected: CompleterItem) {
    if (selected) {
        // console.log(selected.title);
        this.playerService.getPlayerByName(selected.title)
        .subscribe(
          (searchPlayer: Player) => {
            this.searchPlayer = searchPlayer;
            this.router.navigateByUrl('/index').then(
              () => {
              this.router.navigate(['player', this.searchPlayer.playerID]);
           });
          }
         );
        // console.log(this.searchPlayer.playerID);
      } 
 }

}
