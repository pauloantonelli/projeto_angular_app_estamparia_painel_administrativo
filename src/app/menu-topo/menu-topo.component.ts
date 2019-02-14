import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.scss']
})
export class MenuTopoComponent implements OnInit {

  protected logo = '../../assets/logo.png';
  protected menus = {
    botoes: ['home', 'sublimacao', 'orcamento', 'contato'],
  };

  constructor() { }

  ngOnInit() {
  }

}
