import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-flashcard1',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './flashcard2.component.html',
  styleUrl: './flashcard2.component.css'
})
export class fiszka2 {
  fiszka = [
    {question: "coscoscos", answer: "dziala"}, //0
    {question: "hahahahahahaha", answer: "ooooooooooooooooooooooooooooooo"}, //1
    {question:"meow meow", answer: "meow meow"} //2
  ]
    index = 0;
    isVisible = false;
    
    ans(){
      this.isVisible = true;
    }
    
  next(){
    this.index++;
    this.isVisible = false;
  }
}