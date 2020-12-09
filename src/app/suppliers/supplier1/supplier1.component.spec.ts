import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplier1Component } from './supplier1.component';

describe('Supplier1Component', () => {
  let component: Supplier1Component;
  let fixture: ComponentFixture<Supplier1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supplier1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supplier1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
