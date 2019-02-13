import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublimacaoComponent } from './sublimacao.component';

describe('SublimacaoComponent', () => {
  let component: SublimacaoComponent;
  let fixture: ComponentFixture<SublimacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublimacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublimacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
