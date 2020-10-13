import { TestBed } from '@angular/core/testing';

import { TampilanService } from './tampilan.service';

describe('TampilanService', () => {
  let service: TampilanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TampilanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
