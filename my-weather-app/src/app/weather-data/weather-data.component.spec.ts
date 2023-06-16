import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataComponent } from './weather-data.component';
import { TemperatureComponent } from '../temperature/temperature.component';
import { AirPressureComponent } from '../air-pressure/air-pressure.component';

describe('WeatherDataComponent', () => {
  let component: WeatherDataComponent;
  let fixture: ComponentFixture<WeatherDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDataComponent]
    });
    fixture = TestBed.createComponent(WeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
