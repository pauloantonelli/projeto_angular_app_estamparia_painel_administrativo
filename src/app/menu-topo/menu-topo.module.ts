import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopoComponent } from './menu-topo.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    MenuTopoComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [
    MenuTopoComponent
  ]
})
export class MenuTopoModule { }
