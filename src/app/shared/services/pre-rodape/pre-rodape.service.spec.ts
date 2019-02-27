import { TestBed } from '@angular/core/testing';

import { PreRodapeService } from './pre-rodape.service';

describe('PreRodapeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreRodapeService = TestBed.get(PreRodapeService);
    expect(service).toBeTruthy();
  });
});
