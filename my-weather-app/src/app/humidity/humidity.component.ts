import { Component,Input } from '@angular/core';
import { SearchedDataService } from '../searched-data.service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent {
  constructor(public myService: SearchedDataService) {}
  @Input() humidity:number | undefined;
}
