import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../shared/services/home/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-conteudo-central',
  templateUrl: './conteudo-central.component.html',
  styleUrls: ['./conteudo-central.component.scss']
})
export class ConteudoCentralComponent implements OnInit, OnDestroy {

  // avisos
  protected aviso = {
    ativo: null,
    mensagem: '',
  };

  // titulo e subtitulo slide
  protected titulo = '';
  protected subtitulo = '';

  // imgs slide
  protected imgs = [];

  // area de propaganda 01
  protected propaganda01 = {
    img: '',
    titulo: '',
    descricao: ''
  };
  protected propaganda02 = {
    titulo: '',
    lista: [],
    btnTxt: '',
  };

  // area de propaganda 02
  protected propaganda03 = {
    img: '',
    titulo: '',
    descricao: ''
  };
  protected propaganda04 = {
    titulo: '',
    lista: [],
    btnTxt: '',
  };

  private inscricao: Subscription;
  constructor(private http: HomeService) {
  }

  ngOnInit() {
    this.inscricao = this.http.getHomeAll().subscribe((res) => {
      const dados = res[0];
      // avisos
      this.aviso.ativo = dados.aviso.ativo;
      this.aviso.mensagem = dados.aviso.mensagem;

      // titulo e subtitulo slide
      this.titulo = dados.slide.titulo;
      this.subtitulo = dados.slide.subtitulo;

      // imgs slide
      this.imgs = dados.slide.imagens; // resolver questao xxs

      // area de propaganda 01
      this.propaganda01.img = dados.propaganda01.imagem;
      this.propaganda01.titulo = dados.propaganda01.titulo;
      this.propaganda01.descricao = dados.propaganda01.descricao;
      this.propaganda02.titulo = dados.propaganda02.titulo;
      this.propaganda02.lista = dados.propaganda02.lista;
      this.propaganda02.btnTxt = dados.propaganda02.btnTxt;

      // area de propaganda 02
      this.propaganda03.img = dados.propaganda03.imagem;
      this.propaganda03.titulo = dados.propaganda03.titulo;
      this.propaganda03.descricao = dados.propaganda03.descricao;
      this.propaganda04.titulo = dados.propaganda04.titulo;
      this.propaganda04.lista = dados.propaganda04.lista;
      this.propaganda04.btnTxt = dados.propaganda04.btnTxt;
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
