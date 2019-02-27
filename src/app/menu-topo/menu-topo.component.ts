import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../shared/services/menu/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.scss']
})
export class MenuTopoComponent implements OnInit, OnDestroy {

  protected inscricao: Subscription;
  protected logo = '';
  protected menus = {
    botoes: ['home', 'sublimacao', 'orcamento', 'contato', 'portifolio', 'pre rodape', 'rodape', 'emails'],
  };

  constructor(private http: MenuService) { }

  ngOnInit() {
    this.inscricao = this.http.getMenuAll().subscribe((res) => {
      const dados = res[0];
      this.logo = dados.logo.imagem;
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
