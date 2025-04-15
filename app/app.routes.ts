import { Routes } from '@angular/router';
import { fiszka1 } from './flashcard1/flashcard1.component';
import { fiszka2} from './flashcard2/flashcard2.component';
import { Flashcard3Component } from './flashcard3/flashcard3.component';

export const routes: Routes = [
    {path: 'flashcard1', component: fiszka1},
    {path: 'flashcard2', component: fiszka2},
    {path: 'flashcard3', component:Flashcard3Component}
];
