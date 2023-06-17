import { Component } from '@angular/core';

import { SearchedDataService,WeatherData } from '../searched-data.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent {
  city: string = '';
  weatherData: WeatherData | null=null;
  errorMessage: string = '';
  weatherVideo: string = '';
  constructor(private weatherService: SearchedDataService) {}
  
  getWeatherData(city: string) {
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      (error) => {
        this.weatherData = null;
        this.errorMessage = 'Error retrieving weather data. Please try again.';
      }
    );
  }
  getWeatherClass(): string {
    if (this.weatherData) {
      // Determine the weather condition based on the temperature or any other weather data
      if (this.weatherData.Condition == "Clear") {
        return 'weather-sunny';
      } else if (this.weatherData.Condition == "Clouds") {
        return 'weather-cloudy';
      } else if(this.weatherData.Condition=="Rain") {
        return 'weather-rain';
      }
    }
    return '';
  }

}
