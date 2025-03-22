import { TestBed } from '@angular/core/testing';

import { PermroleService } from './permrole.service';

describe('PermroleService', () => {
  let service: PermroleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermroleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
