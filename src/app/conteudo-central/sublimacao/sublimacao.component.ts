import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sublimacao',
  templateUrl: './sublimacao.component.html',
  styleUrls: ['./sublimacao.component.scss'],
  preserveWhitespaces: true,
})
export class SublimacaoComponent implements OnInit {

  protected aviso = {
    ativo: false,
    mensagem: 'Quadro de avisos',
  };
  protected imgPoster = {
    titulo: 'Sublimação',
    img: '../../assets/img1.jpeg',
    descricao: 'Impressão de estampas para Sublimação'
  };
  protected propaganda01 = {
    img:  '../../assets/img1.jpeg',
    titulo: 'Estampas para sublimação',
    // tslint:disable-next-line:max-line-length
    descricao: 'A arte de imprimir estampas por sublimação é um processo de transferência da imagem do papel (offset / digital) para tecidos e materiais de base sintética (poliéster/EVA etc..) ou bases mistas (poliéster/algodão). O processo é dividido em duas etapas: a impressão do papel transfer(digital ou offset) e a estamparia (prensa térmica ou um cilindro – média de 200° C) em fibras têxteis. A tinta para sublimação que está no papel transfer em seu estado sólido entra em contato com o tecido ou superfície da imagem e através do calor e pressão, evapora penetrando nas fibras e estrutura dos materiais. A transferência da estampa sublimática acontece quando a tinta contida no papel sofre a pressão e alta temperatura por 20 segundos. O resultado é expressivo, sejam em peças com bases têxteis com elevada composição de poliéster, como tecidos ou malha.'
  };
  constructor() { }

  ngOnInit() {
  }

}
