import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseUrlService } from '../../baseurl.service';
import { SublimacaoInterface } from './sublimacao.interface';

@Injectable({
  providedIn: 'root'
})
export class SublimacaoService {

  constructor(private url: BaseUrlService, private http: HttpClient) { }
  getSublimacaoAll(): any {
    return this.http.get<SublimacaoInterface>(this.url.baseUrl() + '/sublimacao/todos');
  }
}
