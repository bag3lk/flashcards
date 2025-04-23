import { Routes } from '@angular/router';
import { flashcards } from './flashcards/flashcards.component';
import { newt } from './new/new.component';

export const routes: Routes = [
    {path: 'flashcard1', component: flashcards},
    {path: 'nowafiszka', component: newt},
    {path: ':name', component: flashcards },
];
