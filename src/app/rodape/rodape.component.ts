import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RodapeService } from '../shared/services/rodape/rodape.service';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit, OnDestroy {

  protected inscricao: Subscription;
  protected id: string;
  protected status = '';
  protected rodape = {
    titulo: '',
    subtitulo: '',
    btnTxt: '',
    sucesso: '',
    };
    protected redesSociais = {
    titulo: ['Facebook', 'Instagram'],
    links: [],
    };
  protected email = false;
  constructor(private http: RodapeService) {}

  ngOnInit() {
    this.inscricao = this.http.getRodapeAll()
      .subscribe(
        (res) => {
          const dados = res[0];

          this.id = dados._id;

          this.rodape.titulo = dados.rodape.titulo;
          this.rodape.subtitulo = dados.rodape.subtitulo;
          this.rodape.btnTxt = dados.rodape.btnTxt;
          this.rodape.sucesso = dados.rodape.sucesso;

          this.redesSociais.links = dados.redesSociais.links;

          console.log('Rodape carregado com sucesso!');
        },
        (erro) => {
          console.log('Erro ao carregar, verifique sua conexão com a internet e tente novamente!');
        },
        () => {
          console.log('Acesso completo, atualizado e encerrado com sucesso');
        }
      );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  setRodapeTituloSubtitulo(id: string) {
    // refatorando objeto para coincidir com o do banco de dados
    const docs = { rodape: this.rodape };

    this.inscricao = this.http.setRodapesetRodapeTituloSubtitulol(id, docs).subscribe(
      (response) => {
        this.status = 'Atualizado com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente!';
      },
      () => {
        console.log('Rodape atualizado e encerrado com sucesso');
      }
    );
  }
  setRodapeLinksRedesSociais(id: string) {
    // refatorando objeto para coincidir com o do banco de dados
    const docs = { redesSociais: this.redesSociais };

    this.inscricao = this.http.setRodapeLinksRedesSociais(id, docs).subscribe(
      (response) => {
        this.status = 'Atualizado com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente!';
      },
      () => {
        console.log('Rodape atualizado e encerrado com sucesso');
      }
    );
  }
}
