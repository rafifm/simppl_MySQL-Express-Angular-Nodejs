import { TestBed } from '@angular/core/testing';

import { NilaimhsService } from './nilaimhs.service';

describe('NilaimhsService', () => {
  let service: NilaimhsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NilaimhsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
