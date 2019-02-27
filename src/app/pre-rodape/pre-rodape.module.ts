import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreRodapeComponent } from './pre-rodape.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PreRodapeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PreRodapeComponent
  ]
})
export class PreRodapeModule { }
