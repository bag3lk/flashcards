import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,],
    templateUrl: './flashcard2.component.html',
    styleUrls: ['./flashcard2.component.css']
  })
  export class fiszka1 {
    title = 'routing-app';
  }