import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { WeatherLoggerService } from './weather-logger.service';
import { HttpQueryService } from './http-query.service';
import { WeatherLoggerComponent } from './weather-logger.component';

//http
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    WeatherLoggerComponent,
    HeaderComponent
  ],
  exports:[
    WeatherLoggerComponent
  ],
  providers: [
    WeatherLoggerService,
    HttpQueryService,
  ]
})
export class WeatherLoggerModule { }
