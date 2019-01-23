import { TestBed } from '@angular/core/testing';

import { SearchHubService } from './search-hub.service';

describe('SearchHubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchHubService = TestBed.get(SearchHubService);
    expect(service).toBeTruthy();
  });
});
