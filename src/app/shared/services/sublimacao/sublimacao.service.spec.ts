import { TestBed } from '@angular/core/testing';

import { SublimacaoService } from './sublimacao.service';

describe('SublimacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SublimacaoService = TestBed.get(SublimacaoService);
    expect(service).toBeTruthy();
  });
});
