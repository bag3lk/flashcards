import { ComponentFixture, TestBed } from '@angular/core/testing';

import { newt } from './new.component';

describe('newt', () => {
  let component: newt;
  let fixture: ComponentFixture<newt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [newt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(newt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
