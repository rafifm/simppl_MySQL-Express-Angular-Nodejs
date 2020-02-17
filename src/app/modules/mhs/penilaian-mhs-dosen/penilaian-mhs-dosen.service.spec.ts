import { TestBed } from '@angular/core/testing';

import { PenilaianMhsDosenService } from './penilaian-mhs-dosen.service';

describe('PenilaianMhsDosenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenilaianMhsDosenService = TestBed.get(PenilaianMhsDosenService);
    expect(service).toBeTruthy();
  });
});
