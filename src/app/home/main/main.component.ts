import { Component, OnInit } from '@angular/core';
import { Player } from '../../player/player.model';
import { PlayerService } from '../../player/player.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bestPlayer:Player;

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getBestPlayer()
      .subscribe(
        (bestPlayer:Player) => {
          this.bestPlayer = bestPlayer;
        }
      );
    // this.bestPlayer = this.playerService.getBestPlayer();
    console.log(this.bestPlayer);
  }

}
