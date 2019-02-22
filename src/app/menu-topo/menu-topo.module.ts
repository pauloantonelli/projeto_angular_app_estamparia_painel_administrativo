import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopoComponent } from './menu-topo.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    MenuTopoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuTopoComponent
  ]
})
export class MenuTopoModule { }
