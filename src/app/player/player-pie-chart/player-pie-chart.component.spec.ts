import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPieChartComponent } from './player-pie-chart.component';

describe('PlayerPieChartComponent', () => {
  let component: PlayerPieChartComponent;
  let fixture: ComponentFixture<PlayerPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
