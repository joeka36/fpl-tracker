import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouteModule } from './app-routing.module';
import { Ng2CompleterModule } from "ng2-completer";
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './home/main/main.component';
import { ChartComponent } from './home/chart/chart.component';
import { TableComponent } from './home/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    ErrorComponent,
    MainComponent,
    ChartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    Ng2CompleterModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
