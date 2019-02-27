import { TestBed } from '@angular/core/testing';

import { PortifolioService } from './portifolio.service';

describe('PortifolioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortifolioService = TestBed.get(PortifolioService);
    expect(service).toBeTruthy();
  });
});
