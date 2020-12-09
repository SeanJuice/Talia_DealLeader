import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetypehelpComponent } from './employeetypehelp.component';

describe('EmployeetypehelpComponent', () => {
  let component: EmployeetypehelpComponent;
  let fixture: ComponentFixture<EmployeetypehelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeetypehelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetypehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
