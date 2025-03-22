import { TestBed } from '@angular/core/testing';

import { AdminhomepageService } from './adminhomepage.service';

describe('AdminhomepageService', () => {
  let service: AdminhomepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminhomepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
