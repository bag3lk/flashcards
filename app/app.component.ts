import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
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
  private router = inject(Router);  

  i=0;
  deckName: undefined;
  newFiszka = this.flashcards; 
  isNotVisible = true;
  isVisible= false;

  click(event: Event): void{
    this.isNotVisible = false;
    const element = event.target as HTMLElement;
    const deckName = element.textContent;
    
    if (deckName){
      this.isVisible = false;
      this.isNotVisible = false;
      this.newFiszka = this.flashcards.filter(item => item.name === deckName);
      this.router.navigate([deckName]);
      
    }
  }
}