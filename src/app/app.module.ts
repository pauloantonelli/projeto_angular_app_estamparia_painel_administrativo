import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ConteudoRoutingModule } from './conteudo-central/conteudo-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MenuTopoModule } from './menu-topo/menu-topo.module';
import { MenuTopoMobileModule } from './menu-topo-mobile/menu-topo-mobile.module';
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
    ConteudoRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MenuTopoModule,
    MenuTopoMobileModule,
    ConteudoCentralModule,
    PortifolioClientesModule,
    PreRodapeModule,
    RodapeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
