import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchedDataService } from '../searched-data.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  constructor(public myService: SearchedDataService) {}
  @Input() temperature:number | undefined;
}
