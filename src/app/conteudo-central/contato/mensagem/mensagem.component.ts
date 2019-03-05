import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { MensagemContatoService } from 'src/app/shared/services/mensagem-contato/mensagem-contato.service';


@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit, OnDestroy, DoCheck {

  private inscricao: Subscription;

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

  protected mensagem = [
    {
      _id: '',
      nome: '',
      email: '',
      telefone: '',
      tipoPessoa: {
        tipo: '',
        numero: '',
      },
      corpoMensagem: '',
    },
  ];

  constructor(private http: MensagemContatoService, private router: Router) { }

  ngOnInit() {
    this.inscricao = this.http.getMensagemAll().subscribe(
      (res) => {
        const dados = res.docs;
        setTimeout(() => {
          this.geraBarraDeNavegacao(25, false);
        }, 2000);

        setTimeout(() => {
          this.mensagem = dados;
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
    this.geradorDeBotoesDeNavegacao();
  }

  geraBarraDeNavegacao(progresso: number, conclusao: boolean) {
    this.progressoBar = progresso;
    this.carregando = conclusao;
  }

  getPedidoPorPagina(pagina: number) {
    this.inscricao = this.http.getMensagemPorPagina(pagina).subscribe(
      (response) => {
        const dados = response.docs;

        this.mensagem = dados;

        this.paginacao.totalDeResultados = response.total;
        this.paginacao.paginaAtual = response.page;
        this.paginacao.totalDePaginas = response.pages;
        this.paginacao.limiteDeResultadoPorPagina = response.limit;
      },
      (erro) => {
        this.status = 'verifique sua conexão e tente novamente!';
      },
      () => {
        console.log('Atualizado');
      }
    );
  }

  setDeletePedido(id: string, posicao: number) {
    this.inscricao = this.http.setMensagemDelete(id).subscribe(
      (response) => {
        this.status = 'Pedido deletado com sucesso!';
      },
      (erro) => {
        this.status = 'Verifique sua conexão com a internet e tente novamente!';
      },
      () => {
        console.log('Conexão feita com sucesso e encerrada');
      }
    );
    this.mensagem.splice(posicao, 1);
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
    this.getPedidoPorPagina(numero);
    this.router.navigate(['contato/mensagem'], {
      queryParams: {
        pagina: numero,
      }
    });
    this.geradorDeBotoesDeNavegacao();
  }
  trocarDePaginaAnterior() {
    if (this.paginacao.paginaAtual > 1) {
      this.paginacao.paginaAtual--;
    }
    this.irParaPagina(this.paginacao.paginaAtual);
    this.getPedidoPorPagina(this.paginacao.paginaAtual);
    this.geradorDeBotoesDeNavegacao();
  }
  trocarDePaginaProximo() {
    if (this.paginacao.paginaAtual < this.paginas.length) {
      this.paginacao.paginaAtual++;
    }
    this.irParaPagina(this.paginacao.paginaAtual);
    this.getPedidoPorPagina(this.paginacao.paginaAtual);
    this.geradorDeBotoesDeNavegacao();
  }

}
