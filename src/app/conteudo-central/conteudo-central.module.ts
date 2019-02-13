import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoCentralComponent } from './conteudo-central.component';
import { ContatoComponent } from './contato/contato.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { SublimacaoComponent } from './sublimacao/sublimacao.component';

@NgModule({
  declarations: [
    ConteudoCentralComponent,
    ContatoComponent,
    OrcamentoComponent,
    SublimacaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConteudoCentralComponent
  ]
})
export class ConteudoCentralModule { }
