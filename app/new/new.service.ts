import { Injectable } from '@angular/core';
import { LocalStorage } from 'angular-web-storage';
import { flashcard } from '../flashcards/flashcards.service';

export interface flashcards {
  name: string;
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root',   
})

export class newt {
  
  @LocalStorage('flashcards') flashcardes: flashcard[] = [];

  constructor() {}

  getFlashcards(): flashcard[]{
    return this.flashcardes;
  }

  flashcards: flashcard[] = [];
  newFiszka: flashcards = { name: '', question: '', answer: '' };

  addFlashcard(newFlahcards: flashcard): void {
    this.flashcards.push(newFlahcards);
  }

  getDeck(name: string): flashcard[] {
    return this.flashcards.filter(f => f.name === name);  
  }
}