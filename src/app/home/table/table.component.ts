import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Player } from '../../player/player.model';
import { PlayerService } from '../../player/player.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() transferIn:boolean;
  transferPlayersIn:Player[] = [];
  transferPlayersOut:Player[] = [];

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    if(this.transferIn) {
      this.playerService.getTopTransfersIn()
      .subscribe(
        (topPlayersIn: Player[]) => {
          this.transferPlayersIn = topPlayersIn;
        }
      );
    }
    

    else {
      this.playerService.getTopTransfersOut()
      .subscribe(
        (topPlayersOut: Player[]) => {
          console.log(topPlayersOut);
          this.transferPlayersOut = topPlayersOut;
          console.log(topPlayersOut);
        }
      );
    }
    
    // this.transferPlayersIn = this.playerService.getTopTransfersIn();
    // this.transferPlayersOut = this.playerService.getTopTransfersOut();
  }


  ngOnChanges() {
    if(this.transferIn) {
      this.playerService.getTopTransfersIn()
      .subscribe(
        (topPlayersIn: Player[]) => {
          this.transferPlayersIn = topPlayersIn;
        }
      );
    }
    

    else {
      this.playerService.getTopTransfersOut()
      .subscribe(
        (topPlayersOut: Player[]) => {
          console.log(topPlayersOut);
          this.transferPlayersOut = topPlayersOut;
          console.log(topPlayersOut);
        }
      );
    }
    
    console.log(this.transferPlayersOut);
    // this.transferPlayersIn = this.playerService.getTopTransfersIn();
    // this.transferPlayersOut = this.playerService.getTopTransfersOut();
  }
}
