import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrcamentoComponent } from './orcamento/orcamento.component';
import { FormularioComponent } from './orcamento/formulario/formulario.component';
import { ControleOrcamentoComponent } from './orcamento/controle-orcamento/controle-orcamento.component';
import { ContatoComponent } from './contato/contato.component';
import { MensagemComponent } from './contato/mensagem/mensagem.component';
import { ControleContatoComponent } from './contato/controle-contato/controle-contato.component';

const routes: Routes = [
  { path: 'orcamento', component: OrcamentoComponent, children: [
    { path: 'controle-orcamento', component: ControleOrcamentoComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'formulario/:id', component: FormularioComponent },
    ]
  },
  { path: 'contato', component: ContatoComponent, children: [
    { path: 'controle-contato', component: ControleContatoComponent },
    { path: 'mensagem', component: MensagemComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOrcamentoModule { }
