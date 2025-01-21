import { TestBed } from '@angular/core/testing';

import { NewjobService } from './newjob.service';

describe('NewjobService', () => {
  let service: NewjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
