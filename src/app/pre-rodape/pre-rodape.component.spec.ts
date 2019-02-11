import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRodapeComponent } from './pre-rodape.component';

describe('PreRodapeComponent', () => {
  let component: PreRodapeComponent;
  let fixture: ComponentFixture<PreRodapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRodapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
