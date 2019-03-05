import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleContatoComponent } from './controle-contato.component';

describe('ControleContatoComponent', () => {
  let component: ControleContatoComponent;
  let fixture: ComponentFixture<ControleContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
