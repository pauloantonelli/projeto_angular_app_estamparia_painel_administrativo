import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PortifolioInterface } from './portifolio.interface';
import { BaseUrlService } from '../../baseurl.service';

@Injectable({
  providedIn: 'root'
})
export class PortifolioService {

  constructor(private http: HttpClient, private url: BaseUrlService) { }
  getPortifolioAll(): any {
    return this.http.get<PortifolioInterface>(this.url.baseUrl() + 'portifolio/todos');
  }
  setPortifolioAll(id: any, body: any): any {
    return this.http.put<PortifolioInterface>(this.url.baseUrl() + 'portifolio/editar/' + id, body);
  }
}
