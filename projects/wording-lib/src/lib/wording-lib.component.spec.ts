import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordingLibComponent } from './wording-lib.component';

describe('WordingLibComponent', () => {
  let component: WordingLibComponent;
  let fixture: ComponentFixture<WordingLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordingLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
