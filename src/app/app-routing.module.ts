import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConteudoCentralComponent } from './conteudo-central/conteudo-central.component';
import { SublimacaoComponent } from './conteudo-central/sublimacao/sublimacao.component';
import { PortifolioClientesComponent } from './portifolio-clientes/portifolio-clientes.component';
import { PreRodapeComponent } from './pre-rodape/pre-rodape.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EmailsCadastradosComponent } from './conteudo-central/emails-cadastrados/emails-cadastrados.component';

const routes: Routes = [
  { path: '', component: ConteudoCentralComponent },
  { path: 'home', component: ConteudoCentralComponent },
  { path: 'sublimacao', component: SublimacaoComponent },
  { path: 'portifolio', component: PortifolioClientesComponent },
  { path: 'pre rodape', component: PreRodapeComponent },
  { path: 'rodape', component: RodapeComponent },
  { path: 'emails', component: EmailsCadastradosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
