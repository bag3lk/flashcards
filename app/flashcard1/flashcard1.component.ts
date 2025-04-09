import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-flashcard1',
  imports: [RouterOutlet],
  templateUrl: './flashcard1.component.html',
  styleUrl: './flashcard1.component.css'
})
export class fiszka1 {
  fiszka = {
    "geografia": {question: "Co jest stolicą Kanady?", answer: "Ottawa"},
    "chemia": {question: "Jaki jest symbol tlenu?", answer: "O"},
    "angielski": {question:"Jak przetłumaczysz 'przedmiot' na angielski?", answer: "Object"},
  }
}