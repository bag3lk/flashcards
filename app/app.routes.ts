import { Routes } from '@angular/router';
import { flashcards } from './flashcards/flashcards.component';
import { flashcard } from './flashcards/flashcards.service';

export const routes: Routes = [
    {path: 'flashcard1', component: flashcards},
    {path: 'biologia',component: flashcard },
];
