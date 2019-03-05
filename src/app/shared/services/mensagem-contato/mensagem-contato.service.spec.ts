import { TestBed } from '@angular/core/testing';

import { MensagemContatoService } from './mensagem-contato.service';

describe('MensagemContatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensagemContatoService = TestBed.get(MensagemContatoService);
    expect(service).toBeTruthy();
  });
});
