import { Component, Input } from '@angular/core';
import { SearchedDataService } from '../searched-data.service';

@Component({
  selector: 'app-air-pressure',
  templateUrl: './air-pressure.component.html',
  styleUrls: ['./air-pressure.component.css']
})
export class AirPressureComponent {
  constructor(public myService: SearchedDataService) {}
  @Input() airPressure:number | undefined;
}
