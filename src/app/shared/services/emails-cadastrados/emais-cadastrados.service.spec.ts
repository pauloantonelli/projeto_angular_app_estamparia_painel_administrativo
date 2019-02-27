import { TestBed } from '@angular/core/testing';

import { EmaisCadastradosService } from './emais-cadastrados.service';

describe('EmaisCadastradosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmaisCadastradosService = TestBed.get(EmaisCadastradosService);
    expect(service).toBeTruthy();
  });
});
