import { ComponentFixture, TestBed } from '@angular/core/testing';
import { fiszka1 } from './flashcard1.component';

describe('fiszka1', () => {
  let component: fiszka1;
  let fixture: ComponentFixture<fiszka1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [fiszka1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(fiszka1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
