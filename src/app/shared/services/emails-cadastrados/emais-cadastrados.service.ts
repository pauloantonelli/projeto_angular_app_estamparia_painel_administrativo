import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseUrlService } from '../../baseurl.service';
import { EmailsCadastradosInterface } from './emails-cadastrados.interface';

@Injectable({
  providedIn: 'root'
})
export class EmaisCadastradosService {

  protected valoresAtualizados = null;
  protected erroAtualizacao = null;
  constructor(private http: HttpClient, private url: BaseUrlService) { }
  getEmailsCadastradosAll(): any {
    return this.http.get<EmailsCadastradosInterface>(this.url.baseUrl() + 'email/todos');
  }
  getEmailsCadastradosPorPagina(pagina: number): any {
    return this.http.get<EmailsCadastradosInterface>(this.url.baseUrl() + 'email/todos?page=' + pagina);
  }
  setDeleteEmailCadastradoUnico(id: string): any {
    this.http.delete<EmailsCadastradosInterface>(this.url.baseUrl() + 'email/deletar/' + id)
    .subscribe((valores) => {
      this.valoresAtualizados = 'Deletado com sucesso!';
    },
    (response) => {
      this.erroAtualizacao = 'Erro ao deletar, verifique sua conexão com a internet e tente novamente!';
    },
    () => {
      console.log('Acesso completo, atualizado e encerrado com sucesso');
    });
  }
  getStatusAtualizacao(): any {
    if (this.valoresAtualizados != null) {
      return this.valoresAtualizados;
    } else {
      return this.erroAtualizacao;
    }
  }
}
