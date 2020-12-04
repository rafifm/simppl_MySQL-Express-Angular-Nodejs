import { TestBed } from '@angular/core/testing';

import { DatastaffService } from './datastaff.service';

describe('DatastaffService', () => {
  let service: DatastaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
