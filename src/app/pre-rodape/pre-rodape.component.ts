import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PreRodapeService } from '../shared/services/pre-rodape/pre-rodape.service';

@Component({
  selector: 'app-pre-rodape',
  templateUrl: './pre-rodape.component.html',
  styleUrls: ['./pre-rodape.component.scss']
})
export class PreRodapeComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  protected id: string;
  protected status: string;
  protected certificado01 = {
    titulo: '',
    img: '',
    descricao: '',
  };
  protected certificado02 = {
    titulo: '',
    img: '',
    descricao: '',
  };

  constructor(private http: PreRodapeService) { }

  ngOnInit() {
    this.inscricao = this.http.getPreRodapeAll().subscribe(
      (response) => {
        const dados = response[0];

        this.id = dados._id;

        this.certificado01.titulo = dados.certificado01.titulo;
        this.certificado01.img = dados.certificado01.img;
        this.certificado01.descricao = dados.certificado01.descricao;

        this.certificado02.titulo = dados.certificado02.titulo;
        this.certificado02.img = dados.certificado02.img;
        this.certificado02.descricao = dados.certificado02.descricao;

        console.log('Pre rodape carregado com sucesso!');
      },
      (erro) => {
        console.log('Erro ao carregar pre rodape, verifique sua conexão com a internet e tente novamente!');
      },
      () => {
        console.log('Acesso completo ao pre rodape, atualizado e encerrado com sucesso');
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  setCertificado01(id: string) {
    const docs = {certificado01: this.certificado01};

    this.inscricao = this.http.setPreRodapecertificado01(id, docs).subscribe(
      (response) => {
        this.status = 'Atualizado com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Pre rodape atualizado e encerrado com sucesso');
      }
    );
  }
  setCertificado02(id: string) {
    const docs = {certificado02: this.certificado02};

    this.inscricao = this.http.setPreRodapecertificado01(id, docs).subscribe(
      (response) => {
        this.status = 'Atualizado com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Pre rodape atualizado e encerrado com sucesso');
      }
    );
  }
}
