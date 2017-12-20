import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Player } from '../../player/player.model';
import { PlayerService } from '../../player/player.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getTopSelectedPlayersByIndex(this.index)
      .subscribe(
        (selectedPlayer: Player) => {
          this.selectedPlayer = selectedPlayer;
          console.log(this.selectedPlayer);
          this.pieChartData = [this.selectedPlayer.selected_by_percent, (100 - this.selectedPlayer.selected_by_percent)];
          console.log(this.pieChartData);
        }
      );
    // this.selectedPlayer = this.playerService.getTopSelectedPlayersByIndex(this.index);
  }

  ngOnChanges() {
    this.playerService.getTopSelectedPlayersByIndex(this.index)
      .subscribe(
        (selectedPlayer: Player) => {
          this.selectedPlayer = selectedPlayer;
          // console.log(this.selectedPlayer);
          // this.pieChartData = [this.selectedPlayer.selected_by_percent, (100 - this.selectedPlayer.selected_by_percent)];
          // console.log(this.pieChartData);
        }
      );
    // this.selectedPlayer = this.playerService.getTopSelectedPlayersByIndex(this.index);
  }

  @Input() color;
  @Input() index;

  selectedPlayer:Player;

  // Pie
  public pieChartLabels:string[] = ['Selected', 'Not Selected'];
  public pieChartData:number[] = [40, 60];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
