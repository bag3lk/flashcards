import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-flashcard1',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.css'
})
export class flashcards{
  fiszka = [
    {name:"O", question: "Co jest stolicą Kanady?", answer: "Ottawa"},
    {name:"O", question: "Jaki jest symbol tlenu?", answer: "O"},
    {name:"O", question:"Jak przetłumaczysz 'przedmiot' na angielski?", answer: "Object"},
    {name:"biologia", question: "Jaką objętość posiadają płuca", answer: "5dm³"},
    {name:"biologia", question: "Jakie jest prawidłowe tętno człowieka", answer: "120/80"},
    {name:"biologia", question: "Czym sie różni D/N/A od RNA?", answer: "RNA jest jedną nicią, DNA jest ciągłe po obu stornach"},
    {name:"biologia", question: "Na jaki typ infrkcji trzeba brać antybiotyk", answer: "Bakteryjny"},
    {name:"biologia", question: "W kształt jakiej litery układają się fałdy głosowe", answer: "V"},
    {name:"biologia", question: "Jaka jest najczęstsza choroba układu krwionośnego", answer: "Niedokrwistość"},
    {name:"biologia", question: "Czy rak może mieć włosy, zęby a nawet i oczy?", answer: "Tak"},
    {name:"biologia", question: "W jakim okresie czasu SIDS może zabić dziecko?", answer: "Rok od urodzenia"},
    {name:"biologia", question: "Przez jaką drogę się rozprzestrzenia sepsa", answer: "Krwionośną"},
    {name:"biologia", question: "Jaki kwas mamy w żołądku?", answer: "Kwas solny"},
    {name:"biologia", question: "Jeśli twoi rodzice mają grupę krwi A, to jaką ty masz", answer: "A, albo 0"},
    {name:"biologia", question: "Co to astygmatyzm?", answer: "Astygmatyzm to wada wzroku spowodowana nieregularnym kształtem rogówki lub soczewki oka."},
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