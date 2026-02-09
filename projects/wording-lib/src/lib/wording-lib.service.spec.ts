import { TestBed } from '@angular/core/testing';

import { WordingLibService } from './wording-lib.service';

describe('WordingLibService', () => {
  let service: WordingLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordingLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
