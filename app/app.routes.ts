import { RouterModule, Routes } from '@angular/router';
import { fiszka1 } from './flashcard1/flashcard1.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'flashcard1', component: fiszka1 },
    { path: '', component: AppComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}