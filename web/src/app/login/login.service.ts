import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    // we declare that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export class LoginService {
  constructor(private http: HttpClient) { }

  createPlayer(httpPlayer) {
      console.log('in the service');
      return this.http.post('http://localhost:5000/api/v1/player', httpPlayer)
  }
}