import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player/player.model';
import { PlayerService } from '../../player/player.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.selectedPlayer = this.playerService.getTopSelectedPlayersByIndex(this.index);
    this.pieChartData = [this.selectedPlayer.selected_by_percent, (100 - this.selectedPlayer.selected_by_percent)];
  }

  @Input() color;
  @Input() index;

  selectedPlayer:Player;

  // Pie
  public pieChartLabels:string[] = ['Selected', 'Not Selected'];
  public pieChartData:number[];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
