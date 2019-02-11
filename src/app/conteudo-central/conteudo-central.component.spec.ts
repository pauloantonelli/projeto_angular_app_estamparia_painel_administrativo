import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoCentralComponent } from './conteudo-central.component';

describe('ConteudoCentralComponent', () => {
  let component: ConteudoCentralComponent;
  let fixture: ComponentFixture<ConteudoCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
