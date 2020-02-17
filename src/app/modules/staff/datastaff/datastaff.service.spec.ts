import { TestBed } from '@angular/core/testing';

import { DatastaffService } from './datastaff.service';

describe('DatastaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatastaffService = TestBed.get(DatastaffService);
    expect(service).toBeTruthy();
  });
});
