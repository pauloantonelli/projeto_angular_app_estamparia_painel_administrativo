import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseUrlService } from '../../baseurl.service';
import { PreRodapeInterface } from './pre-rodape.interface';

@Injectable({
  providedIn: 'root'
})
export class PreRodapeService {

  constructor(private http: HttpClient, private url: BaseUrlService) { }

  getPreRodapeAll(): any {
    return this.http.get<PreRodapeInterface>(this.url.baseUrl() + 'pre-rodape/todos');
  }
  setPreRodapecertificado01(id: string, body: any) {
    return this.http.put<PreRodapeInterface>(this.url.baseUrl() + 'pre-rodape/editar/' + id, body);
  }
  setPreRodapecertificado02(id: string, body: any) {
    return this.http.put<PreRodapeInterface>(this.url.baseUrl() + 'pre-rodape/editar/' + id, body);
  }
}
