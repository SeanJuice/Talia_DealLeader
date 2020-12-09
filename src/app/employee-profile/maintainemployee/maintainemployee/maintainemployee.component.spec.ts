import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainemployeeComponent } from './maintainemployee.component';

describe('MaintainemployeeComponent', () => {
  let component: MaintainemployeeComponent;
  let fixture: ComponentFixture<MaintainemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
