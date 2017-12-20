import { Component, OnInit, OnChanges } from '@angular/core';
import { Player } from '../../player/player.model';
import { PlayerService } from '../../player/player.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  bestPlayer:Player;

  constructor(private playerService:PlayerService) { }

  ngOnChanges() {
    this.playerService.getBestPlayer()
      .subscribe(
        (bestPlayer:Player) => {
          this.bestPlayer = bestPlayer;
          console.log(bestPlayer);
        }
      );
  }

  ngOnInit() {
    this.playerService.getBestPlayer()
      .subscribe(
        (bestPlayer:Player) => {
          this.bestPlayer = bestPlayer;
          console.log(bestPlayer);
        }
      );
    // this.bestPlayer = this.playerService.getBestPlayer();
    // console.log(this.bestPlayer);
  }

}
