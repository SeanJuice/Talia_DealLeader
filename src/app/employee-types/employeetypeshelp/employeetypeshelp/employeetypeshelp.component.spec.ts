import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetypeshelpComponent } from './employeetypeshelp.component';

describe('EmployeetypeshelpComponent', () => {
  let component: EmployeetypeshelpComponent;
  let fixture: ComponentFixture<EmployeetypeshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeetypeshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetypeshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
