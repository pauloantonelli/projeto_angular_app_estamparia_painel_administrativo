import { TestBed } from '@angular/core/testing';

import { RodapeService } from './rodape.service';

describe('RodapeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RodapeService = TestBed.get(RodapeService);
    expect(service).toBeTruthy();
  });
});
