import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.css']
})
export class ChartContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   public chartColorsOne: any[] = [
      { 
        backgroundColor:["#B53B59", "#51B2F1"] 
      }];

  public chartColorsTwo: any[] = [
      { 
        backgroundColor:["#51B2F1", "#B53B59"] 
      }];

  public chartColorsThree: any[] = [
      { 
        backgroundColor:["#B53B59", "#51B2F1"] 
      }];
}
