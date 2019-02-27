import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsCadastradosComponent } from './emails-cadastrados.component';

describe('EmailsCadastradosComponent', () => {
  let component: EmailsCadastradosComponent;
  let fixture: ComponentFixture<EmailsCadastradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsCadastradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
