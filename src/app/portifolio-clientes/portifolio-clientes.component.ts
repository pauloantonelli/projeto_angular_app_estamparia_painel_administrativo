import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';

import { PortifolioService } from '../shared/services/portifolio/portifolio.service';

@Component({
  selector: 'app-portifolio-clientes',
  templateUrl: './portifolio-clientes.component.html',
  styleUrls: ['./portifolio-clientes.component.scss']
})
export class PortifolioClientesComponent implements OnInit, OnDestroy {
  protected id: string;
  protected status: any;
  protected inscricao: Subscription;
  protected portifolio = {
    titulo: '',
    subtitulo: '',
    imagens: [],
  };

  constructor(private http: PortifolioService) { }

  ngOnInit() {
    this.inscricao = this.http.getPortifolioAll().subscribe(
      (response) => {
        const dados = response[0];

        this.id = dados._id;

        this.portifolio.titulo = dados.portifolio.titulo;
        this.portifolio.subtitulo = dados.portifolio.subtitulo;
        this.portifolio.imagens = dados.portifolio.imagens;

        console.log('Portifolio carregado com sucesso!');
      },
      (erro) => {
        console.log('Portifolio carregado com sucesso!');
      },
      () => {
        console.log('Acesso completo ao portifolio, atualizado e encerrado com sucesso');
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  trackByIndex(index: number): any {
    return index;
  }
  setPortifolio() {
    const req = {
        portifolio: {
          titulo: this.portifolio.titulo,
          subtitulo: this.portifolio.subtitulo,
          imagens: this.portifolio.imagens,
        }
      };
    this.inscricao = this.http.setPortifolioAll(this.id, req).subscribe(
      (response) => {
        this.status = 'Atualizado com sucesso!';
      },
      (erro) => {
        console.log(erro);
        this.status = 'Erro ao atualizar, verifique sua conexão com a internet e tente novamente';
      },
      () => {
        console.log('Portifólio atualizado e encerrado com sucesso');
      }
    );
  }
  setMaisImagens() {
    this.portifolio.imagens.length += 1;
  }
  setMenosImagens(posicao: number) {
    this.portifolio.imagens.splice(posicao, 1);
    this.setPortifolio();
  }
}
