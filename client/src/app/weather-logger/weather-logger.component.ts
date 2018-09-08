import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { WeatherLoggerService } from './weather-logger.service';
import { FormControl, Validators } from '@angular/forms';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'wl-weather-logger',
  templateUrl: './weather-logger.component.html',
  styleUrls: ['./weather-logger.component.scss']
})
export class WeatherLoggerComponent implements OnInit{
  constructor(private _service:WeatherLoggerService){}

  weather_data = [];
  weather_entry:{date:Date,value:number};

  isNumeric:boolean = false;

  temperatureFormControl = new FormControl(0, [
    Validators.required,
  ]);

  loadUserWeatherEntries(){
    this._service.getWeatherData('/weather');
    this._service.getWeatherStoreData().subscribe((res) => {
      this.weather_data = res;
      console.log('response recieved',res);
    });
  }

  pickDate(event: MatDatepickerInputEvent<Date>) {
    this.weather_entry.date = event.value;
    console.log(this.weather_entry.date);
  }

  ngOnInit() {
    this.loadUserWeatherEntries();
  }

  // submit(){
  //   if(){
  //
  //   }
  // }

  ngOnChanges() {}

}
