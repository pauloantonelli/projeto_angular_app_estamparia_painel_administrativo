import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuTopoModule } from './menu-topo/menu-topo.module';
import { ConteudoCentralModule } from './conteudo-central/conteudo-central.module';
import { PortifolioClientesModule } from './portifolio-clientes/portifolio-clientes.module';
import { PreRodapeModule } from './pre-rodape/pre-rodape.module';
import { RodapeModule } from './rodape/rodape.module';
import { AlinhaTituloDirective } from './shared/alinha-titulo.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlinhaTituloDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuTopoModule,
    ConteudoCentralModule,
    PortifolioClientesModule,
    PreRodapeModule,
    RodapeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
