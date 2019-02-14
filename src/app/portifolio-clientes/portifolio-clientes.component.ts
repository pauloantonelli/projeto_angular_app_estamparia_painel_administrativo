import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio-clientes',
  templateUrl: './portifolio-clientes.component.html',
  styleUrls: ['./portifolio-clientes.component.scss']
})
export class PortifolioClientesComponent implements OnInit {

  protected slide = ['../../assets/img1.jpeg', '../../assets/img2.jpg', '../../assets/img3.jpeg'];

  constructor() { }

  ngOnInit() {
  }

}
