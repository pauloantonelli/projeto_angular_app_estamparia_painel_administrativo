import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortifolioClientesComponent } from './portifolio-clientes.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PortifolioClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PortifolioClientesComponent
  ]
})
export class PortifolioClientesModule { }
