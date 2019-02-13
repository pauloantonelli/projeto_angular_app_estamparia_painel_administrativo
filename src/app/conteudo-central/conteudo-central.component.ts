import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../shared/servidor.service';

@Component({
  selector: 'app-conteudo-central',
  templateUrl: './conteudo-central.component.html',
  styleUrls: ['./conteudo-central.component.scss']
})
export class ConteudoCentralComponent implements OnInit {

  protected dados: any[];
  constructor() { }

  ngOnInit() {
  }

}
