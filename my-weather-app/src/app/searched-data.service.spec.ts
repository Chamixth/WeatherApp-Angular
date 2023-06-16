import { TestBed } from '@angular/core/testing';

import { SearchedDataService } from './searched-data.service';

describe('SearchedDataService', () => {
  let service: SearchedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
