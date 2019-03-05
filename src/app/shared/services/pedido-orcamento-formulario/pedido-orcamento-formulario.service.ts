import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseUrlService } from '../../baseurl.service';
import { PedidoOrcamentoFormularioInterface } from './pedido-orcamento-formulario.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidoOrcamentoFormularioService {

  constructor(private http: HttpClient, private url: BaseUrlService) { }
  getOrcamentoAll(): any {
    return this.http.get<PedidoOrcamentoFormularioInterface>(this.url.baseUrl() + 'formulario/todos');
  }
  getOrcamentoPorPagina(pagina: number): any {
    return this.http.get<PedidoOrcamentoFormularioInterface>(this.url.baseUrl() + 'formulario/todos?page=' + pagina);
  }
  setOrcamentoDelete(id: string): any {
    return this.http.delete<PedidoOrcamentoFormularioInterface>(this.url.baseUrl() + 'formulario/deletar/' + id);
  }
}
