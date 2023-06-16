import { Component, Input,EventEmitter, Output,ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { SearchedDataService } from '../searched-data.service';
import { WeatherDataComponent } from '../weather-data/weather-data.component';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  submitForm() {
    
  
    
  }
  
}
