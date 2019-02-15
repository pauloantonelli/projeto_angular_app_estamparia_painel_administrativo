import { TestBed } from '@angular/core/testing';

import { EnderecoContatoAtendimentoService } from './endereco-contato-atendimento.service';

describe('EnderecoContatoAtendimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnderecoContatoAtendimentoService = TestBed.get(EnderecoContatoAtendimentoService);
    expect(service).toBeTruthy();
  });
});
