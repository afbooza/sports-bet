import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    // we declare that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export class LeagueService {
  constructor(private http: HttpClient) { }

  createLeague(httpLeague) {    
      console.log('in the service')  ;
      console.log(httpLeague);
      return this.http.post('http://localhost:5000/api/v1/league', httpLeague)
  }
}