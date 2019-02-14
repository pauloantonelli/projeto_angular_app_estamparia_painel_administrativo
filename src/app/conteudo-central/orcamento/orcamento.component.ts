import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit {

  // painel de aviso
  protected aviso = {
    ativo: true,
    mensagem: 'Quadro de avisos',
  };

  // campos e detalhes do formulário de orcamento
  protected formulario = {
    titulo: 'Orçamento',
    descricao: 'Pedir um orçamento expresso para estamparia Pegadas',
    pessoa: true,
    envio: false,
    servicos: {
      tituloServico: 'Escolha o serviço que deseja:',
      titulo: ['Impressão de transfer', 'Estampa em rolo', 'Estampa localizada'],
      imgs: ['../../assets/img1.jpeg', '../../assets/img2.jpg', '../../assets/img3.jpeg'],
      escolha: null,
    }
  };

  // combo-box de segmentos do formulario
  // tslint:disable-next-line:max-line-length
  protected segmentos = ['fantasia / brinquedos', 'sportwear / fitness', 'confecção / modinha', 'decoração', 'surf / skate', 'promocional / brindes', 'magazina / private label', 'camisa uniforme de futebol'];

  // titulo da parte da estampa do formulario
  protected detalhamento = {
    titulo: 'Detalhamento técnico da estampa',
  };

  constructor() { }

  ngOnInit() {
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
    console.log('formulario enviado com sucesso!');
  }
}
