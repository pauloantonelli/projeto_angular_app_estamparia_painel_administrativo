import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RodapeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    RodapeComponent
  ]
})
export class RodapeModule { }
