import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule],
    templateUrl: './flashcards.component.html',
    styleUrls: ['./flashcards.component.css']
  })
export class FiszkaModule {
  isVisible = false;
  ans(){
    this.isVisible = true;
  }
  next(){
    this.isVisible = false;
  }
}