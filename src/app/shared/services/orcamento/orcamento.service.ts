import { Injectable } from '@angular/core';
import { BaseUrlService } from '../../baseurl.service';
import { HttpClient } from '@angular/common/http';
import { OrcamentoInterface } from './orcamento.interface';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  constructor(private url: BaseUrlService, private http: HttpClient) { }
  getOrcamentoAll(): any {
    return this.http.get<OrcamentoInterface>(this.url.baseUrl() + '/orcamento/todos');
  }
}
