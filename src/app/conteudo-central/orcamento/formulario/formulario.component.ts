import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { PedidoOrcamentoFormularioService } from 'src/app/shared/services/pedido-orcamento-formulario/pedido-orcamento-formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnDestroy, DoCheck {

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
  protected formularioCliente = [
    {
    _id: '',
    nome: '',
    email: '',
    telefoneFixo: [],
    celular: [],
    empresa: '',
    tipoPessoa: {
        tipo: '',
        numero: '',
    },
    segmento: '',
    servicoEscolhido: '',
    detalhamento: {
      largura: null,
      altura: null,
      quantidade: null,
      cor: '',
      mensagem: '',
      anexo: '',
    },
    }
  ];

  constructor(private http: PedidoOrcamentoFormularioService, private router: Router) { }

  ngOnInit() {
    this.inscricao = this.http.getOrcamentoAll().subscribe(
      (res) => {
        const dados = res.docs;
        setTimeout(() => {
          this.geraBarraDeNavegacao(25, false);
        }, 2000);

        setTimeout(() => {
          this.formularioCliente = dados;
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
  trackByIndex(indice: number): any {
    return indice;
  }

  geraBarraDeNavegacao(progresso: number, conclusao: boolean) {
    this.progressoBar = progresso;
    this.carregando = conclusao;
  }
  getPedidoPorPagina(pagina: number) {
    this.inscricao = this.http.getOrcamentoPorPagina(pagina).subscribe(
      (response) => {
        const dados = response.docs;

        this.formularioCliente = dados;

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
    this.inscricao = this.http.setOrcamentoDelete(id).subscribe(
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
    this.formularioCliente.splice(posicao, 1);
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
    this.router.navigate(['orcamento/formulario'], {
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
