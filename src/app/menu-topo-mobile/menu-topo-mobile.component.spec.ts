import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTopoMobileComponent } from './menu-topo-mobile.component';

describe('MenuTopoMobileComponent', () => {
  let component: MenuTopoMobileComponent;
  let fixture: ComponentFixture<MenuTopoMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTopoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTopoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
