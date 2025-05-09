import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

export interface Fiszka {
  name: string;
  question: string;
  answer: string;
}

@Injectable({ 
  providedIn: 'root',
})

export class flashcard {
    private fiszka = [
    {name:"Pytania", question: "Co jest stolicą Kanady?", answer: "Ottawa"},
    {name:"Pytania", question: "Jaki jest symbol tlenu?", answer: "O"},
    {name:"Pytania", question:"Jak przetłumaczysz 'przedmiot' na angielski?", answer: "Object"},
    {name:"biologia", question: "Jaką objętość posiadają płuca", answer: "5dm³"},
    {name:"biologia", question: "Jakie jest prawidłowe ciśnienie człowieka", answer: "120/80"},
    {name:"biologia", question: "Czym sie różni D/N/A od RNA?", answer: "RNA jest jedną nicią, DNA jest ciągłe po obu stornach"},
    {name:"biologia", question: "Na jaki typ infrkcji trzeba brać antybiotyk", answer: "Bakteryjny"},
    {name:"biologia", question: "W kształt jakiej litery układają się fałdy głosowe", answer: "V"},
    {name:"biologia", question: "Jaka jest najczęstsza choroba układu krwionośnego", answer: "Niedokrwistość"},
    {name:"biologia", question: "Czy rak może mieć włosy, zęby a nawet i oczy?", answer: "Tak"},
    {name:"biologia", question: "W jakim okresie czasu SIDS może zabić dziecko?", answer: "Rok od urodzenia"},
    {name:"biologia", question: "Przez jaką drogę się rozprzestrzenia sepsa", answer: "Krwionośną"},
    {name:"biologia", question: "Jaki kwas mamy w żołądku?", answer: "Kwas solny"},
    {name:"biologia", question: "Jeśli twoi rodzice mają grupę krwi A, to jaką ty masz", answer: "A, albo 0"},
    {name:"sok", question: "a", answer:"b"},
    {name:"angular", question: "aaaaaa", answer: "bbbbbbbb"},
  ];
  getFlashcards(){
    return this.fiszka;
  }
  
  addFlashcard(newFlashcard: Fiszka) {
    this.fiszka.push(newFlashcard);
  }
  constructor(private local: LocalStorageService, private session: SessionStorageService){}
  getNazwa() {
    const savedFlashcards = this.local.get('flashcards');
    if (savedFlashcards) {
      this.fiszka = savedFlashcards;
    }
  
    let nazwy = [];
    for (let item of this.fiszka) {
      if (nazwy.indexOf(item.name) === -1) {
        nazwy.push(item.name);
      }
    }
    return nazwy;
  }
}