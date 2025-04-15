import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flashcard3Component } from './flashcard3.component';

describe('Flashcard3Component', () => {
  let component: Flashcard3Component;
  let fixture: ComponentFixture<Flashcard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flashcard3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flashcard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
