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
  setHomeAviso(id: any, body: any): any {
    return this.http.put<HomeInterface>(this.url.baseUrl() + 'home/editar/' + id, body);
  }
  setHomeTitulo(id: any, body: any): any {
    return this.http.put<HomeInterface>(this.url.baseUrl() + 'home/editar/' + id, body);
  }
  setHomeSubtitulo(id: any, body: any): any {
    return this.http.put<HomeInterface>(this.url.baseUrl() + 'home/editar/' + id, body);
  }
  setHomeSlides(id: any, body: any): any {
    return this.http.put<HomeInterface>(this.url.baseUrl() + 'home/editar/' + id, body);
  }
  setHomePropaganda01(id: any, body: any): any {
    return this.http.put<HomeInterface>(this.url.baseUrl() + 'home/editar/' + id, body);
  }
  setHomePropaganda02(id: any, body: any): any {
    return this.http.put<HomeInterface>(this.url.baseUrl() + 'home/editar/' + id, body);
  }
}
