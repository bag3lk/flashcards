import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-flashcard3', 
  imports: [RouterOutlet, CommonModule],
  templateUrl: './flashcard3.component.html',
  styleUrl: './flashcard3.component.css'
})

export class Flashcard3Component {
  fiszka = [
    {question: "Jaką objętość posiadają płuca", answer: "5dm³"},
    {question: "Jakie jest prawidłowe tętno człowieka", answer: "120/80"},
    {question: "Czym sie różni D/N/A od RNA?", answer: "RNA jest jedną nicią, DNA jest ciągłe po obu stornach"},
    {question: "Na jaki typ infrkcji trzeba brać antybiotyk", answer: "Bakteryjny"},
    {question: "W kształt jakiej litery układają się fałdy głosowe", answer: "V"},
    {question: "Jaka jest najczęstsza choroba układu krwionośnego", answer: "Niedokrwistość"},
    {question: "Czy rak może mieć włosy, zęby a nawet i oczy?", answer: "Tak"},
    {question: "W jakim okresie czasu SIDS może zabić dziecko?", answer: "Rok od urodzenia"},
    {question: "Przez jaką drogę się rozprzestrzenia sepsa", answer: "Krwionośną"},
    {question: "Jaki kwas mamy w żołądku?", answer: "Kwas solny"},
    {question: "Jeśli twoi rodzice mają grupę krwi A, to jaką ty masz", answer: "A, albo 0"},
    {question: "Co to astygmatyzm?", answer: "Astygmatyzm to wada wzroku spowodowana nieregularnym kształtem rogówki lub soczewki oka."},
  ]
  index = 0;
  isVisible = false;
    
  ans(){
    this.isVisible = true;
  }
  next(){
    this.index++;
    this.isVisible = false;
  }
}