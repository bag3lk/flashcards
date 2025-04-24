import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { flashcard, Fiszka } from '../flashcards/flashcards.service';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from 'angular-web-storage';

export interface newt{
  name:string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-newt',
  imports: [CommonModule, FormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})

export class newt implements OnInit {
  private service = inject(flashcard);
  flashcards: Fiszka[] = [];
  names: string[] = [];

  newFiszka = {name:'', question:'', answer:''};
  isVisible = false;
  success = false;

  namee: string= '';
  answers: string[] = [];
  questions: string[] = [];
  liczba: number = 0;
  inputFields: number[] = [];

  constructor(public local: LocalStorageService) {}

  generateInputs() {
    this.inputFields = [];
    for (let i = 0; i < this.liczba; i++) {
      this.inputFields.push(i);
    }
  }

  addFiszka(){
    for (let i = 0; i < this.questions.length; i++) {
      const newFlashcard: Fiszka = {
        name: this.namee,
        question: this.questions[i],
        answer: this.answers[i],
      };
      this.service.addFlashcard(newFlashcard);
    }
    this.flashcards = this.service.getFlashcards();
    this.local.set('flashcards', this.flashcards);
  
  const savedFlashcards = this.local.get('flashcards');

  if(savedFlashcards){
    this.flashcards = savedFlashcards;
    this.success = true;
  } 
  else{
    this.flashcards = this.service.getFlashcards();
  }
  this.names = this.service.getNazwa();
}

  ngOnInit(){
    this.flashcards = this.service.getFlashcards();
    this.names = this.service.getNazwa();
  }
}