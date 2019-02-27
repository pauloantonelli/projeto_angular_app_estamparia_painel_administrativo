import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RodapeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RodapeComponent
  ]
})
export class RodapeModule { }
