import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPressureComponent } from './air-pressure.component';

describe('AirPressureComponent', () => {
  let component: AirPressureComponent;
  let fixture: ComponentFixture<AirPressureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirPressureComponent]
    });
    fixture = TestBed.createComponent(AirPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
