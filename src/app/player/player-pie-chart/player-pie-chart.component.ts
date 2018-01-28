import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-pie-chart',
  templateUrl: './player-pie-chart.component.html',
  styleUrls: ['./player-pie-chart.component.css']
})
export class PlayerPieChartComponent implements OnInit {

  constructor(public playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayerByID(this.playerID)
      .subscribe(
         (player:Player) => {
           this.selectedPlayer = player;

           if (this.type == 0) {
              this.pieChartData = [this.selectedPlayer.selected_by_percent, (100 - this.selectedPlayer.selected_by_percent)];
              this.pieChartLabels =  ['Selected', 'Not Selected'];
            }

            else if (this.type == 1) {
              this.pieChartData = [this.selectedPlayer.transfer_in_event, this.selectedPlayer.transfer_out_event];
              this.pieChartLabels = ["Transfer In", "Transfer Out"];
            }

            else if (this.type == 2) {
              this.pieChartData = [this.selectedPlayer.goals_scored, this.selectedPlayer.assists];
              this.pieChartLabels = ["Goals", "Assists"]
            }
         }
       );

            

  }

  @Input() color;
  @Input() playerID;
  @Input() type;

  selectedPlayer:Player;

  // Pie
  public pieChartLabels:string[];
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
