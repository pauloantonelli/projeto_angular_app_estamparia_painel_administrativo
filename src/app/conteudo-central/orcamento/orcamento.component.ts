import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrcamentoService } from 'src/app/shared/services/orcamento/orcamento.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit, OnDestroy {

  protected inscricao: Subscription;
  protected status: string;
  protected id: string;

  protected aviso = {
      ativo: null,
      mensagem: '',
    };
  protected formulario = {
    titulo: '',
    descricao: '',
    servicos: {
        titulo: '',
        tiposDeServicos: [],
        imagens: [],
      }
    };
    protected segmentos = [];
    protected pedidoMinimo = null;
    protected mensagemDeSucesso = {
      titulo: '',
      subtitulo: '',
    };

  protected textBtnAviso: string;

  constructor(private http: OrcamentoService) { }

  ngOnInit() {
    this.inscricao = this.http.getOrcamentoAll().subscribe((res) => {
      const dados = res[0];
      this.id = dados._id;

      // painel de aviso
      this.aviso.ativo = dados.aviso.ativo;
      this.aviso.mensagem = dados.aviso.mensagem;
      this.setTextBtnAtivo();

      // campos e detalhes do formulário de orcamento
      this.formulario.titulo = dados.formulario.titulo;
      this.formulario.descricao = dados.formulario.descricao;
      this.formulario.servicos.titulo = dados.formulario.servicos.titulo;
      this.formulario.servicos.tiposDeServicos = dados.formulario.servicos.tiposDeServicos;
      this.formulario.servicos.imagens = dados.formulario.servicos.imagens;

      // combo-box de segmentos do formulario
      this.segmentos = dados.segmento;
      this.pedidoMinimo = dados.pedidoMinimo;

      // mensagem de sucesso formulario
      this.mensagemDeSucesso.titulo = dados.mensagemDeSucesso.titulo;
      this.mensagemDeSucesso.subtitulo = dados.mensagemDeSucesso.subtitulo;
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  setAviso(id: string) {
    this.aviso.ativo = !this.aviso.ativo;
    const docs = { aviso: this.aviso };

    this.inscricao = this.http.setOrcamentoAviso(id, docs).subscribe(
      (response) => {
        this.status = 'Aviso atualizado com sucesso!';
        this.setTextBtnAtivo();
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Contato atualizado e encerrado com sucesso');
      }
    );
  }
  setTextBtnAtivo() {
    if (this.aviso.ativo === true) {
      this.textBtnAviso = 'Painel Ativo';
    } else {
      this.textBtnAviso = 'Painel Inativo';
    }
  }

  setFormulario(id: string) {
    const docs = { formulario: this.formulario };

    this.inscricao = this.http.setFormulario(id, docs).subscribe(
      (response) => {
        this.status = 'Campos do formulario atualizados com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Segmentos atualizados e encerrados com sucesso');
      }
    );
  }
  // retorna o indice de cada elemento para o [(ngModel)]
  trackByIndex(index: number): any {
    return index;
  }

  setSegmentos(id: string) {
    const docs = { segmento: this.segmentos };

    this.inscricao = this.http.setSegmentos(id, docs).subscribe(
      (response) => {
        this.status = 'Segmentos atualizados com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Segmentos atualizados e encerrados com sucesso');
      }
    );
  }

  setPedidoMinimo(id: string) {
    const docs = { pedidoMinimo: this.pedidoMinimo };

    this.inscricao = this.http.setPedidoMinimo(id, docs).subscribe(
      (response) => {
        this.status = 'Numero de pedido mínimo atualizado com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Segmentos atualizados e encerrados com sucesso');
      }
    );
  }

  setMensagemSucessoPedidoOrcamento(id: string) {
    const docs = { mensagemDeSucesso: this.mensagemDeSucesso };

    this.inscricao = this.http.setMensagemSucessoPedidoOrcamento(id, docs).subscribe(
      (response) => {
        this.status = 'Mensagem de sucesso atualizada! Seus clientes vão gostar!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Segmentos atualizados e encerrados com sucesso');
      }
    );
  }
}
