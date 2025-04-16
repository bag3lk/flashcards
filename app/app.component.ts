import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { flashcard } from './flashcards/flashcards.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private service = inject(flashcard);
  flashcards = this.service.getFlashcards(); //wszystkie fiszki
  names = this.service.getNazwa(); //tylko nazwy

  i=0;
  deckName: undefined;

  click(event: Event): void{
    const element = event.target as HTMLElement;
    const deckName = element.textContent;
  }

  random(){
    let newFiszka = [];
    newFiszka = this.flashcards;

    newFiszka = newFiszka.filter(item => item.name === this.deckName);
  }
}