import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoContatoAtendimentoService {

  private telefones = ['11 1234-5678', '11 8765-4321'];
  private horario = {
    diaDaSemana: 'Segunda a Sexta',
    horario: '9h00 ás 18h00',
  };
  private endereco = {
    rua: 'Rua Xavier Krauss',
    numero: 560,
    bairro: 'Vila Leopoldina',
    cep: '05313-000',
    estado: 'São Paulo - SP'
  };
  constructor() { }
  getTelefones(): string[] {
    return this.telefones;
  }
  getHorario(): any {
    return this.horario;
  }
  getEndereco(): any {
    return this.endereco;
  }
}
