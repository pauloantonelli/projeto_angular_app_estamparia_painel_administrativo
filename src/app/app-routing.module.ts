import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConteudoCentralComponent } from './conteudo-central/conteudo-central.component';

const routes: Routes = [
  { path: 'home', component: ConteudoCentralComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
