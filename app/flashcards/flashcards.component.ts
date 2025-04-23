import { Component, inject } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { CommonModule} from '@angular/common';
import { flashcard } from './flashcards.service';

@Component({
  selector: 'app-flashcard1',
  imports: [CommonModule, RouterOutlet, ], 
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.css'
})
export class flashcards{
    isVisible = false;
    isNotVisible = false;
    private service = inject(flashcard);
    flashcards = this.service.getFlashcards();
    private route = inject(ActivatedRoute);

    deckName = '';
    index = 0;
    card: any;
    //chat gpt miło pomógł (co to jest........)
    constructor(){
      this.route.paramMap.subscribe(params => {
        this.deckName = params.get('name') ?? '';
        this.flashcards = this.service.getFlashcards().filter(card => card.name === this.deckName);

        this.index = 0;
        this.card = this.flashcards[this.index];
        this.isVisible = false;
        this.isNotVisible = true;
      });
    }

    ans(){
      this.isVisible = true;
    }
    next(){
      this.isVisible = false;
      if(this.index < this.flashcards.length - 1){
        this.index++;
        this.card = this.flashcards[this.index];
      }
    }
    
}