import { TestBed } from '@angular/core/testing';

import { BaseUrlService } from './baseurl.service';

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseUrlService = TestBed.get(BaseUrlService);
    expect(service).toBeTruthy();
  });
});
