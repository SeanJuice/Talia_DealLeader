import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelisthelpComponent } from './employeelisthelp.component';

describe('EmployeelisthelpComponent', () => {
  let component: EmployeelisthelpComponent;
  let fixture: ComponentFixture<EmployeelisthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelisthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelisthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
