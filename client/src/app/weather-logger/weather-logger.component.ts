import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { WeatherLoggerService } from './weather-logger.service';

@Component({
  selector: 'wl-weather-logger',
  templateUrl: './weather-logger.component.html',
  styleUrls: ['./weather-logger.component.scss']
})
export class WeatherLoggerComponent implements OnInit{
  constructor(private _service:WeatherLoggerService){}

  weather_data = [];

  loadUserWeatherEntries(){
    this._service.getWeatherData('/weather');
    this._service.getWeatherStoreData().subscribe((res) => {
      this.weather_data = res;
      console.log('response recieved',res);
    });
  }

  ngOnInit() {
    this.loadUserWeatherEntries();
  }

  ngOnChanges() {}

}
