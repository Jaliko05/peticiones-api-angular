import { TestBed } from '@angular/core/testing';

import { UsrUptcApiService } from './usr-uptc-api.service';

describe('UsrUptcApiService', () => {
  let service: UsrUptcApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsrUptcApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
