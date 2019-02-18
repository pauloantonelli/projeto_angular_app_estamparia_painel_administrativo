import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SublimacaoComponent } from './sublimacao/sublimacao.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: 'sublimacao', component: SublimacaoComponent },
  { path: 'orcamento', component: OrcamentoComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConteudoRoutingModule { }
