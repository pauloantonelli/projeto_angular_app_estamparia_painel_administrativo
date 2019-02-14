import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-rodape',
  templateUrl: './pre-rodape.component.html',
  styleUrls: ['./pre-rodape.component.scss']
})
export class PreRodapeComponent implements OnInit {

  protected certificado01 = {
    img: '../../assets/logo.png',
    titulo: 'Abvtex',
    // tslint:disable-next-line:max-line-length
    descricao: 'A Sublimação Dharma é fornecedora textil certificada e reconhecida pela Abvtex. Mantém-se fiel aos seus princípios que são a ética e o respeito à legislação, apoiando ações que visem a responsabilidade social, a formalização nas relações comerciais e o combate à concorrência fraudulenta.',
  };
  protected certificado02 = {
    img: '../../assets/logo.png',
    titulo: 'Fama Disney',
    // tslint:disable-next-line:max-line-length
    descricao: 'É uma imensa satisfação fazer parte da cadeia de produção dos produtos Disney e ser reconhecida por proporcionar um local de trabalho seguro, inclusivo e respeitoso, de acordo com o Programa de Normas Internacionais de Trabalho da Walt Disney Company.',
  };

  constructor() { }

  ngOnInit() {
  }

}
