import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopoMobileComponent } from './menu-topo-mobile.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuTopoMobileComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    MenuTopoMobileComponent
  ]
})
export class MenuTopoMobileModule { }
