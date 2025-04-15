import { ComponentFixture, TestBed } from '@angular/core/testing';

import { flashcards } from './flashcards.component';

describe('flashcards', () => {
  let component: flashcards;
  let fixture: ComponentFixture<flashcards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [flashcards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(flashcards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
