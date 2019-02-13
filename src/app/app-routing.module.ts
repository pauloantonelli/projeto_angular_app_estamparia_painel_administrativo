import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConteudoCentralComponent } from './conteudo-central/conteudo-central.component';
import { SublimacaoComponent } from './conteudo-central/sublimacao/sublimacao.component';
import { OrcamentoComponent } from './conteudo-central/orcamento/orcamento.component';
import { ContatoComponent } from './conteudo-central/contato/contato.component';

const routes: Routes = [
  { path: '', component: ConteudoCentralComponent },
  { path: 'sublimacao', component: SublimacaoComponent },
  { path: 'orcamento', component: OrcamentoComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
