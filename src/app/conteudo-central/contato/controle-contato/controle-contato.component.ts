import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContatoService } from 'src/app/shared/services/contato/contato.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-controle-contato',
  templateUrl: './controle-contato.component.html',
  styleUrls: ['./controle-contato.component.scss']
})
export class ControleContatoComponent implements OnInit, OnDestroy {

  protected inscricao: Subscription;
  protected id: string;
  protected status: string;
  protected contato = {
    telefones: [],
    atendimento: {
      diaDaSemana: '',
      horario: '',
    },
    endereco: {
      rua: '',
      numero: null,
      bairro: '',
      cep: '',
      estado: '',
    }
  };

  constructor(private http: ContatoService) {
  }

  ngOnInit() {
    this.inscricao = this.http.getContatoAll().subscribe(
      (res) => {
        const dados = res[0];

        this.id = dados._id;

        this.contato.telefones = dados.telefones;

        this.contato.atendimento.diaDaSemana = dados.atendimento.diaDaSemana;
        this.contato.atendimento.horario = dados.atendimento.horario;
        this.contato.endereco.rua = dados.endereco.rua;
        this.contato.endereco.numero = dados.endereco.numero;
        this.contato.endereco.bairro = dados.endereco.bairro;
        this.contato.endereco.cep = dados.endereco.cep;
        this.contato.endereco.estado = dados.endereco.estado;

        console.log('Contato carregado com sucesso!');
      },
      (erro) => {
        console.log('Contato carregado com sucesso!');
      },
      () => {
        console.log('Acesso completo ao Contato, atualizado e encerrado com sucesso');
      }
    );
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  trackByIndex(index: number): any {
    return index;
  }
  setContato(id: string) {
    this.inscricao = this.http.setContatoAll(id, this.contato).subscribe(
      (response) => {
        this.status = 'Dados atualizados com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Contato atualizado e encerrado com sucesso');
      }
    );
  }
}
