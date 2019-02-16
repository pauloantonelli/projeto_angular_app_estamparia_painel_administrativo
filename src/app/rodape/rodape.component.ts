import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../shared/services/contato/contato.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  protected inscricao: Subscription;
  protected telefones: [];
  protected atendimento = {
    diaDaSemana: '',
    horario: '',
  };
  protected endereco = {
    rua: '',
    numero: null,
    bairro: '',
    cep: '',
    estado: '',
  };
  protected redes = {
    icone: ['../assets/facebook.png', '../../assets/instagram.png'],
    link: ['https://facebook.com/pauloantonelli', 'https://instagram.com/pauloantonelli'],
  };
  protected email = false;
  constructor(private http: ContatoService) {}

  ngOnInit() {
    this.inscricao = this.http.getContatoAll().subscribe((res) => {
      const dados = res[0];
      this.telefones = dados.telefones;
      this.atendimento.diaDaSemana = dados.atendimento.diaDaSemana;
      this.atendimento.horario = dados.atendimento.horario;
      this.endereco.rua = dados.endereco.rua;
      this.endereco.numero = dados.endereco.numero;
      this.endereco.bairro = dados.endereco.bairro;
      this.endereco.cep = dados.endereco.cep;
      this.endereco.estado = dados.endereco.estado;
    });
  }
  enviarEnderecoEmailCliente() {
    this.email = !this.email;
    setTimeout(() => {
      this.email = !this.email;
    }, 8000);
  }

}
