import { TestBed } from '@angular/core/testing';

import { PenilaianMhsGuruService } from './penilaian-mhs-guru.service';

describe('PenilaianMhsGuruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenilaianMhsGuruService = TestBed.get(PenilaianMhsGuruService);
    expect(service).toBeTruthy();
  });
});
