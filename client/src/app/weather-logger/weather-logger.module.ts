import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { WeatherLoggerService } from './weather-logger.service';
import { HttpQueryService } from './http-query.service';

import { WeatherLoggerComponent } from './weather-logger.component';
import { TableComponent } from './table/table.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

import { MatMomentDateModule } from '@angular/material-moment-adapter'

//http
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MatMomentDateModule,
  ],
  declarations: [
    WeatherLoggerComponent,
    HeaderComponent,
    TableComponent,
    DatepickerComponent
  ],
  exports:[
    WeatherLoggerComponent,
    TableComponent,
    DatepickerComponent
  ],
  providers: [
    WeatherLoggerService,
    HttpQueryService,
  ]
})
export class WeatherLoggerModule { }
