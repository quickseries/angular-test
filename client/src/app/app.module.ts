//core
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//modules
import { WeatherLoggerModule } from './weather-logger/weather-logger.module';

import { HttpQueryService } from './weather-logger/http-query.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    WeatherLoggerModule
  ],
  exports:[

  ],
  providers: [
    HttpQueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
