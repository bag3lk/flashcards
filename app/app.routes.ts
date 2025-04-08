import { Routes } from '@angular/router';
import { fiszka1 } from './flashcard1/flashcard1.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'flashcard1', component: fiszka1},
    {path: 'home', component: AppComponent}
];
