import { TestBed } from '@angular/core/testing';

import { PenempatanService } from './penempatan.service';

describe('PenempatanService', () => {
  let service: PenempatanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenempatanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
