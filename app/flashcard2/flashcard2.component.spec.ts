import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fiszka2 } from './flashcard2.component';

describe('fiszka2', () => {
  let component: fiszka2;
  let fixture: ComponentFixture<fiszka2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [fiszka2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(fiszka2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
