import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConteudoCentralComponent } from './conteudo-central.component';
import { ContatoComponent } from './contato/contato.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { SublimacaoComponent } from './sublimacao/sublimacao.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ConteudoCentralComponent,
    ContatoComponent,
    OrcamentoComponent,
    SublimacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ConteudoCentralComponent
  ]
})
export class ConteudoCentralModule { }
