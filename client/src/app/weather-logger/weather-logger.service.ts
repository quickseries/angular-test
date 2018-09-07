import { Injectable } from '@angular/core';
import { DataStore } from './base-http-store';
import { Observable } from 'rxjs/Observable';
import { HttpQueryService } from './http-query.service';

@Injectable()
export class WeatherLoggerService {

  constructor(private http_service:HttpQueryService) { }

  private weather_store = new DataStore([]);
  getWeatherStoreData():Observable<Object[]>{
    return this.weather_store.getState$();
  }

  //WEATHER MODULE CRUD

  getWeatherData(route){
    this.http_service.get(route)
      .subscribe(response => {
        this.weather_store.setState(response);
        // console.log(response);
      },error =>{
        console.log('error',error);
      });
  };

  postWeatherData = (route,arg_post) => {
    this.http_service.post(route,arg_post)
      .subscribe(response => {
        this.weather_store.resetState();
        // console.log(response);
      },error =>{
        console.log('error',error);
      });
  };

  editWeatherData = (route,arg_post) => {
    this.http_service.put(route,arg_post)
      .subscribe(response => {
        this.weather_store.resetState();
        // console.log(response);
      },error =>{
        console.log('error',error);
      });
  };

  deleteWeatherData = (route) => {
    this.http_service.delete(route)
      .subscribe(response => {
        this.weather_store.resetState();
        // console.log(response);
      },error =>{
        console.log('error',error);
      });
  };

}
