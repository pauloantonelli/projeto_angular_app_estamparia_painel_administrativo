import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  protected redes = {
    icone: ['../assets/facebook.png', '../../assets/instagram.png'],
    link: ['https://facebook.com/pauloantonelli', 'https://instagram.com/pauloantonelli'],
  };

  protected email = false;
  constructor() { }

  ngOnInit() {
  }
  enviarEnderecoEmailCliente() {
    this.email = !this.email;
    setTimeout(() => {
      this.email = !this.email;
    }, 8000);
  }

}
