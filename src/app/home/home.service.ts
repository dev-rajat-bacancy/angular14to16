import { Inject, Injectable, InjectionToken, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export const HTTP_CLIENT_TOKEN = new InjectionToken<HttpClient>('HttpClient');

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  http= inject(HttpClient);



  constructor() { }

  getData() {
    return this.http.get(`${this.apiUrl}/todos`);
  }
}
