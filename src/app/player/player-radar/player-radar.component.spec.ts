import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRadarComponent } from './player-radar.component';

describe('PlayerRadarComponent', () => {
  let component: PlayerRadarComponent;
  let fixture: ComponentFixture<PlayerRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
