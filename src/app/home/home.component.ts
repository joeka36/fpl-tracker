import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public chartColorsOne: any[] = [
      { 
        backgroundColor:["#E90052", "#37003C"] 
      }];

  public chartColorsTwo: any[] = [
      { 
        backgroundColor:["#04F5FF", "#E90052"] 
      }];

  public chartColorsThree: any[] = [
      { 
        backgroundColor:["#37003C", "#04F5FF"] 
      }];
}
