import { Component, OnInit, OnDestroy } from '@angular/core';
import { SublimacaoService } from 'src/app/shared/services/sublimacao/sublimacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sublimacao',
  templateUrl: './sublimacao.component.html',
  styleUrls: ['./sublimacao.component.scss'],
  preserveWhitespaces: true,
})
export class SublimacaoComponent implements OnInit, OnDestroy {

  protected inscricao: Subscription;
  protected id: string;
  protected status: string;

  // avisos
  protected aviso = {
    ativo: null,
    mensagem: '',
  };
  protected textBtnAviso: string;

  protected poster = {
    titulo: '',
    imagem: '',
    descricao: '',
  };
  protected propaganda = {
    titulo: [],
    imagem:  [],
    descricao: [],
  };
  constructor(private http: SublimacaoService) { }

  ngOnInit() {
    this.inscricao = this.http.getSublimacaoAll().subscribe((res) => {
      const dados = res[0];

      this.id = dados._id;

      // avisos
      this.aviso.ativo = dados.aviso.ativo;
      this.aviso.mensagem = dados.aviso.mensagem;
      this.setTextBtnAtivo();

      // poster da pagina
      this.poster.titulo = dados.poster.titulo;
      this.poster.imagem = dados.poster.imagem;
      this.poster.descricao = dados.poster.descricao;

      // propaganda
      this.propaganda.imagem = dados.propaganda.imagem;
      this.propaganda.titulo = dados.propaganda.titulo;
      this.propaganda.descricao = dados.propaganda.descricao;
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  trackByIndex(indice: number): any {
    return indice;
  }
  setAviso(id: string) {
    this.aviso.ativo = !this.aviso.ativo;
    const docs = { aviso: this.aviso };

    this.inscricao = this.http.setSublimacaoAviso(id, docs).subscribe(
      (response) => {
        this.status = 'Aviso atualizado com sucesso!';
        this.setTextBtnAtivo();
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Sublimação atualizado e encerrado com sucesso');
      }
    );
  }
  setTextBtnAtivo() {
    if (this.aviso.ativo === true) {
      this.textBtnAviso = 'Painel Ativo';
    } else {
      this.textBtnAviso = 'Painel Inativo';
    }
  }
  setPoster(id: string) {
    const docs = { poster: this.poster };

    this.inscricao = this.http.setSublimacaoPoster(id, docs).subscribe(
      (resolve) => {
        this.status = 'Campos do poster forão atualizados com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Sublimação atualizado e encerrado com sucesso');
      }
    );
  }
  maisPropaganda() {
    this.propaganda.titulo.push('');
    this.propaganda.descricao.push('');
    this.propaganda.imagem.push('');
  }
  menosPropaganda(posicao) {
    this.propaganda.titulo.splice(posicao, 1);
    this.propaganda.descricao.splice(posicao, 1);
    this.propaganda.imagem.splice(posicao, 1);
  }
  setPropaganda(id: string) {
    const docs = { propaganda: this.propaganda };

    this.inscricao = this.http.setSublimacaoPropaganda01(id, docs).subscribe(
      (response) => {
        this.status = 'Propaganda atualizada com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Sublimação atualizado e encerrado com sucesso');
      }
    );
  }
}
