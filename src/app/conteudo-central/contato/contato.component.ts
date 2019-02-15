import { Component, OnInit, ViewChild } from '@angular/core';
import { EnderecoContatoAtendimentoService } from 'src/app/shared/servicos/endereco-contato-atendimento.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  protected telefones: string[] = [];
  protected horario = {
    diaDaSemana: String,
    horario: String,
  };
  protected endereco = {
    rua: String,
    numero: Number,
    bairro: String,
    cep: String,
    estado: String,
  };

  constructor(private contatoService: EnderecoContatoAtendimentoService) {
    this.telefones = this.contatoService.getTelefones();
    this.horario = this.contatoService.getHorario();
    this.endereco = this.contatoService.getEndereco();
  }

  ngOnInit() {
  }
}
