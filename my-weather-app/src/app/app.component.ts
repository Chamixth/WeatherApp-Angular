import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import {FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-weather-app';
}
