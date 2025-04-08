import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fiszka1 } from './flashcard1.component';

@NgModule({
  declarations: [fiszka1],
  imports: [CommonModule],
  exports: [fiszka1]
})
export class SubPageModule { }