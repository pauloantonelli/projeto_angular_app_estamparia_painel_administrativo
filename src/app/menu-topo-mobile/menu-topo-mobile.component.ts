import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo-mobile',
  templateUrl: './menu-topo-mobile.component.html',
  styleUrls: ['./menu-topo-mobile.component.scss']
})
export class MenuTopoMobileComponent implements OnInit {

  protected logo = '../../assets/logo.png';
  protected menus = {
    botoes: ['home', 'sublimacao', 'orcamento', 'contato'],
  };
  constructor() { }

  ngOnInit() {
  }

}
