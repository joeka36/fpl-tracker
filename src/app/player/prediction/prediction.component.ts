import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player/player.model';
import { PlayerService } from '../../player/player.service';


@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit{

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
   if(this.option == 0) {
     this.lineChartData = [{data:[], label: 'Fantasy Points'}];
     this.lineChartLabels = [];
   }
          
  else {
    this.lineChartData = [{data:[], label: 'Fantasy Points'}];
    this.lineChartLabels = [];
  } 

    this.playerService.getPlayerByID(this.index)
      .subscribe(
         (player:Player) => {
           this.selectedPlayer = player;
           console.log(this.selectedPlayer);

           if(this.option == 0) {
            this.pastPoints = this.selectedPlayer.past_fixtures_points;
            this.pastPoints.push(this.selectedPlayer.ep_this);
            this.pastPoints.push(this.selectedPlayer.ep_next)
            this.fixtures = this.selectedPlayer.fixtures;
            this.lineChartData = [{data: this.pastPoints, label: 'Fantasy Points'}];
            console.log(this.lineChartData);
            this.lineChartLabels = this.fixtures;
          }
          
          else {
            this.pastPoints = this.selectedPlayer.season_points;
            this.fixtures = this.selectedPlayer.season_name;
            this.lineChartData = [{data:this.pastPoints, label: 'Fantasy Points'}];
            this.lineChartLabels = this.fixtures;
          } 
         }
       );          
  }


  @Input() index;
  @Input() option;
  @Input() color;

  selectedPlayer:Player;
  pastPoints:Number[];
  fixtures:String[];
  public lineChartType:string = 'line';
  public lineChartData:Array<any>;
  public lineChartLabels:Array<any>;
  public lineChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false
  };

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}