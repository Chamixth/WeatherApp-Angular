import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { AirPressureComponent } from './air-pressure/air-pressure.component';
import { HumidityComponent } from './humidity/humidity.component';
import { FormsModule } from '@angular/forms';
import { SearchedDataService } from './searched-data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherDataComponent,
    TemperatureComponent,
    AirPressureComponent,
    HumidityComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SearchedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
