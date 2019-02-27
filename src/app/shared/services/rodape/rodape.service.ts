import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RodapeInterface } from './rodape.interface';
import { BaseUrlService } from '../../baseurl.service';

@Injectable({
  providedIn: 'root'
})
export class RodapeService {

  constructor(private http: HttpClient, private url: BaseUrlService) { }

  getRodapeAll(): any {
    return this.http.get<RodapeInterface>(this.url.baseUrl() + 'rodape/todos');
  }
  setRodapesetRodapeTituloSubtitulol(id: string, body: any) {
    return this.http.put<RodapeInterface>(this.url.baseUrl() + 'rodape/editar/' + id, body);
  }
  setRodapeLinksRedesSociais(id: string, body: any) {
    return this.http.put<RodapeInterface>(this.url.baseUrl() + 'rodape/editar/' + id, body);
  }
}
