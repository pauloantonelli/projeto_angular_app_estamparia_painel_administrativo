import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../shared/services/home/home.service';
import { Subscription } from 'rxjs';
import { MenuService } from '../shared/services/menu/menu.service';

@Component({
  selector: 'app-conteudo-central',
  templateUrl: './conteudo-central.component.html',
  styleUrls: ['./conteudo-central.component.scss']
})
export class ConteudoCentralComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  protected status: string;
  protected id: string;

  protected logo = {
    id: '',
    imagem: '',
  };

  protected titulo = '';
  protected subtitulo = '';

  // avisos
  protected aviso = {
    ativo: null,
    mensagem: '',
  };
  protected textBtnAviso: string;

  // titulo e subtitulo slide
  protected slides = {
    titulo: [],
    subtitulo: [],
    imagens: [],
  };

  // area de propaganda 01
  protected propaganda01 = {
    imagem: '',
    titulo: '',
    descricao: '',
    subtitulo: '',
    lista: [],
    btnTxt: '',
  };

  // area de propaganda 02
  protected propaganda02 = {
    imagem: '',
    titulo: '',
    descricao: '',
    subtitulo: '',
    lista: [],
    btnTxt: '',
  };

  constructor(private http: HomeService, private logotipo: MenuService) {
  }

  ngOnInit() {
    this.inscricao = this.logotipo.getMenuAll().subscribe(
      (response) => {
        const dados = response[0];

        this.logo.id = dados._id;
        this.logo.imagem = dados.logo.imagem;
      }
    );

    this.inscricao = this.http.getHomeAll().subscribe((res) => {
      const dados = res[0];

      this.id = dados._id;

      this.titulo = dados.titulo;
      this.subtitulo = dados.subtitulo;

      // avisos
      this.aviso.ativo = dados.aviso.ativo;
      this.aviso.mensagem = dados.aviso.mensagem;
      this.setTextBtnAtivo();

      // titulo e subtitulo slide
      this.slides.titulo = dados.slides.titulo;
      this.slides.subtitulo = dados.slides.subtitulo;
      this.slides.imagens = dados.slides.imagens;

      // area de propaganda 01
      this.propaganda01.imagem = dados.propaganda01.imagem;
      this.propaganda01.titulo = dados.propaganda01.titulo;
      this.propaganda01.descricao = dados.propaganda01.descricao;
      this.propaganda01.subtitulo = dados.propaganda01.titulo;
      this.propaganda01.lista = dados.propaganda01.lista;
      this.propaganda01.btnTxt = dados.propaganda01.btnTxt;

      // area de propaganda 02
      this.propaganda02.imagem = dados.propaganda02.imagem;
      this.propaganda02.titulo = dados.propaganda02.titulo;
      this.propaganda02.descricao = dados.propaganda02.descricao;
      this.propaganda02.subtitulo = dados.propaganda02.titulo;
      this.propaganda02.lista = dados.propaganda02.lista;
      this.propaganda02.btnTxt = dados.propaganda02.btnTxt;
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  setLogotipo(id: string) {
    const docs = { logo: this.logo };

    this.inscricao = this.logotipo.setMenuAll(id, docs).subscribe(
      (response) => {
        this.status = 'Logotipo atualizado com sucesso!';
        this.setTextBtnAtivo();
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Logotipo atualizado e encerrado com sucesso');
      }
    );
  }
  setAviso(id: string) {
    this.aviso.ativo = !this.aviso.ativo;
    const docs = { aviso: this.aviso };
    console.log(docs);

    this.inscricao = this.http.setHomeAviso(id, docs).subscribe(
      (response) => {
        this.status = 'Aviso atualizado com sucesso!';
        this.setTextBtnAtivo();
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Home atualizado e encerrado com sucesso');
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

  setTitulo(id: any) {
    const docs = { titulo: this.titulo };

    this.inscricao = this.http.setHomeTitulo(id, docs).subscribe(
      (response) => {
        this.status = 'Titulo atualizado com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Home atualizado e encerrado com sucesso');
      }
    );
  }
  setSubtitulo(id: any) {
    const docs = { subtitulo: this.subtitulo };

    this.inscricao = this.http.setHomeSubtitulo(id, docs).subscribe(
      (response) => {
        this.status = 'Subtitulo atualizado com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Home atualizado e encerrado com sucesso');
      }
    );
  }
  setSlides(id: string) {
    const docs = { slides: this.slides };

    this.inscricao = this.http.setHomeSlides(id, docs).subscribe(
      (response) => {
        this.status = 'Slides atualizados com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Home atualizado e encerrado com sucesso');
      }
    );
  }
  setMaisSlides() {
    this.slides.titulo.length += 1;
    this.slides.subtitulo.length += 1;
    this.slides.imagens.length += 1;
  }
  setMenosSlides(posicao: number) {
    this.slides.titulo.splice(posicao, 1);
    this.slides.subtitulo.splice(posicao, 1);
    this.slides.imagens.splice(posicao, 1);
  }
  trackByIndex(id: number): any {
    return id;
  }
  setPropaganda01(id: string) {
    const docs = { propaganda01: this.propaganda01 };

    this.inscricao = this.http.setHomePropaganda01(id, docs).subscribe(
      (response) => {
        this.status = 'Propaganda 1 atualizada com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Home atualizado e encerrado com sucesso');
      }
    );
  }
  setPropaganda02(id: string) {
    const docs = { propaganda02: this.propaganda02 };

    this.inscricao = this.http.setHomeSubtitulo(id, docs).subscribe(
      (response) => {
        this.status = 'Propaganda 2 atualizada com sucesso!';
      },
      (erro) => {
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Home atualizado e encerrado com sucesso');
      }
    );
  }
}
