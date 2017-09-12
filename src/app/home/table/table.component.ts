import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player/player.model';
import { PlayerService } from '../../player/player.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() transferIn:boolean;
  transferPlayersIn:Player[] = [];
  transferPlayersOut:Player[] = [];

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.transferPlayersIn = this.playerService.getTopTransfersIn();
    this.transferPlayersOut = this.playerService.getTopTransfersOut();
  }


}
