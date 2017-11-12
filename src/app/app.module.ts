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

import { PlayerService } from './player/player.service';
import { ChartContainerComponent } from './home/chart-container/chart-container.component';
import { TableContainerComponent } from './home/table-container/table-container.component';
import { PlayerSummaryComponent } from './player/player-summary/player-summary.component';
import { PredictionComponent } from './player/prediction/prediction.component';
import { PlayerRadarComponent } from './player/player-radar/player-radar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    ErrorComponent,
    MainComponent,
    ChartComponent,
    TableComponent,
    ChartContainerComponent,
    TableContainerComponent,
    PlayerSummaryComponent,
    PredictionComponent,
    PlayerRadarComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    Ng2CompleterModule,
    FormsModule,
    ChartsModule
  ],
  providers: [ PlayerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
