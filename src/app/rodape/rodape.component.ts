import { Component, OnInit } from '@angular/core';
import { EnderecoContatoAtendimentoService } from '../shared/servicos/endereco-contato-atendimento.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

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
  protected redes = {
    icone: ['../assets/facebook.png', '../../assets/instagram.png'],
    link: ['https://facebook.com/pauloantonelli', 'https://instagram.com/pauloantonelli'],
  };
  protected email = false;
  constructor(private contatoService: EnderecoContatoAtendimentoService) {
    this.telefones = this.contatoService.getTelefones();
    this.horario = this.contatoService.getHorario();
    this.endereco = this.contatoService.getEndereco();
  }

  ngOnInit() {
  }
  enviarEnderecoEmailCliente() {
    this.email = !this.email;
    setTimeout(() => {
      this.email = !this.email;
    }, 8000);
  }

}
