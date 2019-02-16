import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  constructor() { }

  baseUrl(): string {
    return 'http://localhost:3002/api/';
  }
}
