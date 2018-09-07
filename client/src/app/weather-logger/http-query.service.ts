import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpQueryService {

  constructor(private http: HttpClient) { }

  private path_uri = 'http://localhost:3000/api';

  get(route):Observable<any>{
    let url = this.path_uri + route;
    console.log(url);
    return this.http.get(url)
  };

  post(route,query):Observable<any>{
    let url = this.path_uri + route;
    return this.http.post(url,query)
  };

  put(route,query):Observable<any>{
    let url = this.path_uri + route;
    return this.http.put(url,query)
  };

  delete(route):Observable<any>{
    let url = this.path_uri + route;
    return this.http.delete(url)
  };

}
