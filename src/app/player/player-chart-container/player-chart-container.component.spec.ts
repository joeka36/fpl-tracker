import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerChartContainerComponent } from './player-chart-container.component';

describe('PlayerChartContainerComponent', () => {
  let component: PlayerChartContainerComponent;
  let fixture: ComponentFixture<PlayerChartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerChartContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
