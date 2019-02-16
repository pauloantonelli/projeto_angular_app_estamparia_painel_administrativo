import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContatoService } from 'src/app/shared/services/contato/contato.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit, OnDestroy {

  protected incricao: Subscription;
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

  constructor(private http: ContatoService) {
  }

  ngOnInit() {
    this.incricao = this.http.getContatoAll().subscribe((res) => {
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
  ngOnDestroy(): void {
    this.incricao.unsubscribe();
  }
}
