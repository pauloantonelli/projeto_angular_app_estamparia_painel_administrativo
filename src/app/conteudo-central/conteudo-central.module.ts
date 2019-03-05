import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConteudoCentralComponent } from './conteudo-central.component';
import { ContatoComponent } from './contato/contato.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { SublimacaoComponent } from './sublimacao/sublimacao.component';
import { RouterModule } from '@angular/router';
import { EmailsCadastradosComponent } from './emails-cadastrados/emails-cadastrados.component';
import { FormularioComponent } from './orcamento/formulario/formulario.component';
import { MensagemComponent } from './contato/mensagem/mensagem.component';
import { ControleOrcamentoComponent } from './orcamento/controle-orcamento/controle-orcamento.component';
import { AppOrcamentoModule } from './orcamento-routing.module';
import { ControleContatoComponent } from './contato/controle-contato/controle-contato.component';

@NgModule({
  declarations: [
    ConteudoCentralComponent,
    ContatoComponent,
    OrcamentoComponent,
    SublimacaoComponent,
    EmailsCadastradosComponent,
    FormularioComponent,
    MensagemComponent,
    ControleOrcamentoComponent,
    ControleContatoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppOrcamentoModule,
    FormsModule,
  ],
  exports: [
    ConteudoCentralComponent
  ]
})
export class ConteudoCentralModule { }
