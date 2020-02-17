import { TestBed } from '@angular/core/testing';

import { DatadosenService } from './datadosen.service';

describe('DatadosenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatadosenService = TestBed.get(DatadosenService);
    expect(service).toBeTruthy();
  });
});
