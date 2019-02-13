import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DadosServidor } from './dados.interface';
import { Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  private readonly api = 'http://localhost:3002/api/estudantes/todos';
  private dados: DadosServidor[];
  private inscricao: Subscriber<any>;

  constructor(private servidor: HttpClient) { }

  listaTotal() {
    return this.servidor.get<DadosServidor[]>(this.api);
  }
}
