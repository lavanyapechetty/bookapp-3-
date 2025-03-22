import { TestBed } from '@angular/core/testing';

import { BookconditionService } from './bookcondition.service';

describe('BookconditionService', () => {
  let service: BookconditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookconditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
