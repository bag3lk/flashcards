import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-flashcard1',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './flashcard1.component.html',
  styleUrl: './flashcard1.component.css'
})
export class fiszka1 {
  fiszka = [
    {question: "Co jest stolicą Kanady?", answer: "Ottawa"}, //0
    {question: "Jaki jest symbol tlenu?", answer: "O"}, //1
    {question:"Jak przetłumaczysz 'przedmiot' na angielski?", answer: "Object"} //2
  ]
    index = 0;
    isVisible = false;
    
    ans() {
      this.isVisible = true;
    }
    
  next() {
    this.index++;
    this.isVisible = false;
  }
}