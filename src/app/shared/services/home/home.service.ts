import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseUrlService } from '../../baseurl.service';
import { HomeInterface } from './home.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private url: BaseUrlService, private http: HttpClient) {}
  getHomeAll(): any {
    return this.http.get<HomeInterface>(this.url.baseUrl() + 'home/todos');
  }
  setHomeAll(id: any, body: any) {
    this.http.put<HomeInterface>(this.url.baseUrl() + 'home/editar/' + id, body);
  }
}
