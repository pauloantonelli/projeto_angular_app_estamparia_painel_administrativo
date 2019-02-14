import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  protected telefones = ['11 1234-5678', '11 8765-4321'];
  protected horario = {
    diaDaSemana: 'Segunda a Sexta',
    horario: '9h00 ás 18h00',
  };
  protected endereco = {
    rua: 'Rua Xavier Krauss',
    numero: 560,
    bairro: 'Vila Leopoldina',
    cep: '05313-000',
    estado: 'São Paulo - SP'
  };

  constructor() { }

  ngOnInit() {
  }
}
