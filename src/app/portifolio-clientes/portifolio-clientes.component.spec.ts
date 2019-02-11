import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioClientesComponent } from './portifolio-clientes.component';

describe('PortifolioClientesComponent', () => {
  let component: PortifolioClientesComponent;
  let fixture: ComponentFixture<PortifolioClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortifolioClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortifolioClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
