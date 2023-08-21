import { TestBed } from '@angular/core/testing';

import { SearchBarDataService } from './search-bar-data.service';

describe('SearchBarDataService', () => {
  let service: SearchBarDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBarDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
