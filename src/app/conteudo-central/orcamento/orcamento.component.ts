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
  // painel de aviso
  protected aviso = {
    ativo: null,
    mensagem: '',
  };

  // campos e detalhes do formulário de orcamento
  protected formulario = {
    titulo: '',
    descricao: '',
    pessoa: true,
    envio: false,
    servicos: {
      titulo: '',
      tiposDeServicos: [],
      imgs: [],
      escolha: null,
    }
  };

  // combo-box de segmentos do formulario
  protected segmentos = [];

  // titulo da parte da estampa do formulario
  protected detalhamento = '';

  constructor(private http: OrcamentoService) { }

  ngOnInit() {
    this.inscricao = this.http.getOrcamentoAll().subscribe((res) => {
      const dados = res[0];

      // painel de aviso
      this.aviso.ativo = dados.aviso.ativo;
      this.aviso.mensagem = dados.aviso.mensagem;

      // campos e detalhes do formulário de orcamento
      this.formulario.titulo = dados.formulario.titulo;
      this.formulario.descricao = dados.formulario.descricao;
      this.formulario.servicos.titulo = dados.formulario.servicos.titulo;
      this.formulario.servicos.tiposDeServicos = dados.formulario.servicos.tiposDeServicos;
      this.formulario.servicos.imgs = dados.formulario.servicos.imagens;

      // combo-box de segmentos do formulario
      this.segmentos = dados.formulario.segmento;
      this.detalhamento = dados.formulario.detalhamento;
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  tipoPessoa() {
    this.formulario.pessoa = !this.formulario.pessoa;
  }
  escolhaDoServico(id: number) {
    this.formulario.servicos.escolha = id;
    console.log(this.formulario.servicos.escolha);
  }
  enviaFormulario() {
    this.formulario.envio = !this.formulario.envio;
    setTimeout(() => {
      this.formulario.envio = !this.formulario.envio;
    }, 7000);
  }
}
