import { Injectable } from '@angular/core';
import { BaseUrlService } from '../../baseurl.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrcamentoInterface } from './orcamento.interface';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  /*protected headers = new  HttpHeaders()
  .set('Content-Type', 'json');*/

  constructor(private url: BaseUrlService, private http: HttpClient) { }

  getOrcamentoAll(): any {
    return this.http.get<OrcamentoInterface>(this.url.baseUrl() + 'orcamento/todos');
  }
  setOrcamentoAviso(id: any, body: any): any {
    return this.http.put<OrcamentoInterface>(this.url.baseUrl() + 'orcamento/editar/' + id, body);
  }
  setFormulario(id: string, body: any): any {
    return this.http.put<OrcamentoInterface>(this.url.baseUrl() + 'orcamento/editar/' + id, body);
  }
  setSegmentos(id: string, body: any): any {
    return this.http.put<OrcamentoInterface>(this.url.baseUrl() + 'orcamento/editar/' + id, body);
  }
  setPedidoMinimo(id: string, body: any): any {
    return this.http.put<OrcamentoInterface>(this.url.baseUrl() + 'orcamento/editar/' + id, body);
  }
  setMensagemSucessoPedidoOrcamento(id: string, body: any): any {
    return this.http.put<OrcamentoInterface>(this.url.baseUrl() + 'orcamento/editar/' + id, body);
  }
}
