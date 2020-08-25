import { TestBed } from '@angular/core/testing';

import { DatasekolahService } from './datasekolah.service';

describe('DatasekolahService', () => {
  let service: DatasekolahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasekolahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
