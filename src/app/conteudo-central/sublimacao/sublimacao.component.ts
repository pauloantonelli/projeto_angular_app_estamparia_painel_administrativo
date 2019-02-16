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
  protected aviso = {
    ativo: false,
    mensagem: '',
  };
  protected poster = {
    titulo: '',
    imagem: '',
    descricao: ''
  };
  protected propaganda01 = {
    imagem:  '',
    titulo: '',
    descricao: ''
  };
  constructor(private http: SublimacaoService) { }

  ngOnInit() {
    this.inscricao = this.http.getSublimacaoAll().subscribe((res) => {
      const dados = res[0];

      this.aviso.ativo = dados.aviso.ativo;
      this.aviso.mensagem = dados.aviso.mensagem;

      this.poster.titulo = dados.poster.titulo;
      this.poster.imagem = dados.poster.imagem;
      this.poster.descricao = dados.poster.descricao;

      this.propaganda01.imagem = dados.propaganda01.imagem;
      this.propaganda01.titulo = dados.propaganda01.titulo;
      this.propaganda01.descricao = dados.propaganda01.descricao;
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
