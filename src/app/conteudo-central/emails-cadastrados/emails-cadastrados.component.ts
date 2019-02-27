import { Component, OnInit, OnDestroy, DoCheck, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { EmaisCadastradosService } from 'src/app/shared/services/emails-cadastrados/emais-cadastrados.service';

@Component({
  selector: 'app-emails-cadastrados',
  templateUrl: './emails-cadastrados.component.html',
  styleUrls: ['./emails-cadastrados.component.scss']
})
export class EmailsCadastradosComponent implements OnInit, OnDestroy, DoCheck {

  protected inscricao: Subscription;

  protected carregando: boolean;
  protected progressoBar: number;

  protected status: any;
  protected paginas = [];
  protected paginacao = {
    totalDeResultados: null,
    paginaAtual: null,
    totalDePaginas: null,
    limiteDeResultadoPorPagina: null,
  };
  protected cadastro = [
    {
      email: '',
      _id: '',
    }
  ];
  constructor(private http: EmaisCadastradosService, private router: Router) { }

  ngOnInit() {
    this.inscricao = this.http.getEmailsCadastradosAll().subscribe(
      (res) => {
        const dados = res.docs;
        setTimeout(() => {
          this.geraBarraDeNavegacao(25, false);
        }, 2000);

        setTimeout(() => {
          this.cadastro = dados;
          this.geraBarraDeNavegacao(50, false);
        }, 3000);

        setTimeout(() => {
          this.paginacao.totalDeResultados = res.total;
          this.paginacao.paginaAtual = res.page;
          this.geraBarraDeNavegacao(75, false);
        }, 4000);

        setTimeout(() => {
          this.paginacao.totalDePaginas = res.pages;
          this.paginacao.limiteDeResultadoPorPagina = res.limit;
          this.geradorDeBotoesDeNavegacao();
          this.geraBarraDeNavegacao(100, true);
        }, 6000);
      });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  ngDoCheck() {
    this.status = this.http.getStatusAtualizacao();
    this.geradorDeBotoesDeNavegacao();
  }
  geraBarraDeNavegacao(progresso: number, conclusao: boolean) {
    this.progressoBar = progresso;
    this.carregando = conclusao;
  }
  getEmailsPorPagina(pagina: number) {
    this.inscricao = this.http.getEmailsCadastradosPorPagina(pagina).subscribe((res) => {
      const dados = res.docs;

      this.cadastro = dados;

      this.paginacao.totalDeResultados = res.total;
      this.paginacao.paginaAtual = res.page;
      this.paginacao.totalDePaginas = res.pages;
      this.paginacao.limiteDeResultadoPorPagina = res.limit;
    });
    this.geradorDeBotoesDeNavegacao();
  }
  setDeleteEmail(id: string, posicao: number) {
    this.cadastro.splice(posicao, 1);
    this.http.setDeleteEmailCadastradoUnico(id);
    this.paginas.splice(posicao, 1);
    this.geradorDeBotoesDeNavegacao();
  }
  geradorDeBotoesDeNavegacao() {
    if (this.paginas.length < this.paginacao.totalDePaginas) {
      for (let i = 0; i < this.paginacao.totalDePaginas; i++) {
        this.paginas[i] = i + 1;
      }
    }
  }
  irParaPagina(numero: number) {
    this.paginacao.paginaAtual = numero;
    this.router.navigate(['emails'], {
      queryParams: {
        pages: numero,
      }
    });
    this.geradorDeBotoesDeNavegacao();
  }
  trocarDePaginaAnterior() {
    if (this.paginacao.paginaAtual > 1) {
      this.paginacao.paginaAtual--;
    }
    this.irParaPagina(this.paginacao.paginaAtual);
    this.getEmailsPorPagina(this.paginacao.paginaAtual);
    this.geradorDeBotoesDeNavegacao();
  }
  trocarDePaginaProximo() {
    if (this.paginacao.paginaAtual < this.paginas.length) {
      this.paginacao.paginaAtual++;
    }
    this.irParaPagina(this.paginacao.paginaAtual);
    this.getEmailsPorPagina(this.paginacao.paginaAtual);
    this.geradorDeBotoesDeNavegacao();
  }
}
