import { TestBed } from '@angular/core/testing';

import { PedidoOrcamentoFormularioService } from './pedido-orcamento-formulario.service';

describe('PedidoOrcamentoFormularioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedidoOrcamentoFormularioService = TestBed.get(PedidoOrcamentoFormularioService);
    expect(service).toBeTruthy();
  });
});
