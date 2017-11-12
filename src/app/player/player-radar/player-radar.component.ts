import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player/player.model';
import { PlayerService } from '../../player/player.service';


@Component({
  selector: 'app-player-radar',
  templateUrl: './player-radar.component.html',
  styleUrls: ['./player-radar.component.css']
})
export class PlayerRadarComponent implements OnInit {

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.selectedPlayer = this.playerService.getPlayerByIndex(this.index - 1);
    console.log(this.selectedPlayer);
    this.radarChartData = [{data: [this.selectedPlayer.influence,
      this.selectedPlayer.creativity, this.selectedPlayer.threat,
      this.selectedPlayer.ict_index
    ], label: 'Player Info'}];
    this.radarChartLabels = ['Influence', 'Creativity', 'Threat', 'ICT Average'];
    console.log(this.radarChartData);
    console.log(this.radarChartLabels);
  }

  @Input() index;
  selectedPlayer:Player;

  public radarChartLabels:string[];
  public radarChartData:any;
  public radarChartType:string = 'radar';
  public color:any[] = [
    {
      backgroundColor: ["#75a9ff"],
      borderColor: ["#5998ff"],
      pointBackgroundColor: '#5998ff',
      pointBorderColor: '#fff',
    }
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
