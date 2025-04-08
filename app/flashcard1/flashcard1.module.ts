import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,],
    templateUrl: './flashcard1.component.html',
    styleUrls: ['./flashcard1.component.css']
  })
  export class fiszka1 {
    title = 'routing-app';
  }