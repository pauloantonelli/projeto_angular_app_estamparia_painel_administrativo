import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleOrcamentoComponent } from './controle-orcamento.component';

describe('ControleOrcamentoComponent', () => {
  let component: ControleOrcamentoComponent;
  let fixture: ComponentFixture<ControleOrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleOrcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
