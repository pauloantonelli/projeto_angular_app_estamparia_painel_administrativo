import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseUrlService } from '../../baseurl.service';
import { MensagemContatoInterface } from './mensagem-contato.interface';

@Injectable({
  providedIn: 'root'
})
export class MensagemContatoService {

  constructor(private http: HttpClient, private url: BaseUrlService) { }
  getMensagemAll(): any {
    return this.http.get<MensagemContatoInterface>(this.url.baseUrl() + 'mensagem-contato/todos');
  }
  getMensagemPorPagina(pagina: number): any {
    return this.http.get<MensagemContatoInterface>(this.url.baseUrl() + 'mensagem-contato/todos?page=' + pagina);
  }
  setMensagemDelete(id: string): any {
    return this.http.delete<MensagemContatoInterface>(this.url.baseUrl() + 'mensagem-contato/deletar/' + id);
  }
}
