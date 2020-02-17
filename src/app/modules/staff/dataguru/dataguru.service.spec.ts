import { TestBed } from '@angular/core/testing';

import { DataguruService } from './dataguru.service';

describe('DataguruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataguruService = TestBed.get(DataguruService);
    expect(service).toBeTruthy();
  });
});
