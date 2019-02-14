import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../shared/servidor.service';

@Component({
  selector: 'app-conteudo-central',
  templateUrl: './conteudo-central.component.html',
  styleUrls: ['./conteudo-central.component.scss']
})
export class ConteudoCentralComponent implements OnInit {

  // avisos
  protected aviso = {
    ativo: true,
    mensagem: 'Quadro de avisos',
  };

  // imgs slide
  protected imgs = ['../../assets/img1.jpeg', '../../assets/img2.jpg', '../../assets/img3.jpeg'];

  // titulo e subtitulo
  protected titulo = 'Estamparia digital';
  protected subtitulo = 'Pegadas - Sublimação é a nossa arte';

  // area de propaganda 01
  protected propaganda01 = {
    img: '../../assets/logo.png',
    titulo: 'Sublimação com tecnologia, qualidade e velocidade',
    // tslint:disable-next-line:max-line-length
    descricao: 'A produção de moda está cada vez mais personalizada. Na Dharma Prints as possibilidades para estampar suas coleções e produtos são infinitas. Nossa estamparia digital é especializada em imprimir transfer e estampas em tecido. Temos uma história de trabalho de duas décadas, marcada pela qualidade, responsabilidade e fidelidade aos clientes.'
  };
  protected propaganda02 = {
    titulo: 'ESTAMPAMOS TECIDOS E PRODUTOS DE DIVERSOS SEGMENTOS',
    lista: ['Moda Fashion', 'Sportswear e Fitnesswear', 'Brinquedos e Fantasia', 'Decoração', 'Brindes Promocionais'],
    btnText: 'Conheça a Pegadas Estamparia',
  };

  // area de propaganda 02
  protected propaganda03 = {
    img: '../../assets/logo.png',
    titulo: 'Estamparia localizada ou em rolo de tecido',
    // tslint:disable-next-line:max-line-length
    descricao: 'Sublimação sob demanda com tecnologia inovadora que permite produzir qualquer quantidade de estampas com cores incríveis, qualidade e preços acessíveis. Tecidos sintéticos podem ser estampados por meio da técnica de sublimação. Conte consco desde o início do processo: design da estampa, prova de cor e protótipo e estamparia.'
  };
  protected propaganda04 = {
    titulo: 'ESTRUTURA DA ESTAMPARIA DIGITAL',
    // tslint:disable-next-line:max-line-length
    lista: ['Impressão offset de transfer para sublimação em grande volume', 'Plotter digital para estampar para qualquer quantidade', 'Design e tratamento de estampas para sublimação', 'Assessoria de design, prova de cores e protótipos', 'Estamparia de tecido em rolo ou localizada'],
    btnText: 'Estamparia full service',
  };

  constructor() { }

  ngOnInit() {
  }

}
