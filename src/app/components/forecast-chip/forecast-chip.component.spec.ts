import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastChipComponent } from './forecast-chip.component';

describe('ForecastChipComponent', () => {
  let component: ForecastChipComponent;
  let fixture: ComponentFixture<ForecastChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
