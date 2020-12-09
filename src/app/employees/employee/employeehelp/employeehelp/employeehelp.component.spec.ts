import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeehelpComponent } from './employeehelp.component';

describe('EmployeehelpComponent', () => {
  let component: EmployeehelpComponent;
  let fixture: ComponentFixture<EmployeehelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeehelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
