import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flashcard1Component } from './flashcard1.component';

describe('Flashcard1Component', () => {
  let component: Flashcard1Component;
  let fixture: ComponentFixture<Flashcard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flashcard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flashcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
