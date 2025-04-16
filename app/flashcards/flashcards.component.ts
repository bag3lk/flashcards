import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import { flashcard } from './flashcards.service';

@Component({
  selector: 'app-flashcard1',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.css'
})
export class flashcards{
    isVisible = false;
    
    private service = inject(flashcard);
    flashcards = this.service.getFlashcards();
      /*
      'type' to wybrany jakis deck przez osobe 
      */
      

    ans(){
      this.isVisible = true;
    }
      
    next(){
      this.isVisible = false;
    }
}