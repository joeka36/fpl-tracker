import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-chart-container',
  templateUrl: './player-chart-container.component.html',
  styleUrls: ['./player-chart-container.component.css']
})
export class PlayerChartContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() playerID;

  public chartColorsOne: any[] = [
      { 
        backgroundColor:["#FFC1CE", "#51B2F1"]
      }];

  public chartColorsTwo: any[] = [
      { 
        backgroundColor:["#51B2F1", "#FFC1CE"] 
      }];

  public chartColorsThree: any[] = [
      { 
        backgroundColor:["#FFC1CE", "#51B2F1"] 
      }];

}
