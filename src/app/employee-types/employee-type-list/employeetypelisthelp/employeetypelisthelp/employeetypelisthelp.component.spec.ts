import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetypelisthelpComponent } from './employeetypelisthelp.component';

describe('EmployeetypelisthelpComponent', () => {
  let component: EmployeetypelisthelpComponent;
  let fixture: ComponentFixture<EmployeetypelisthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeetypelisthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetypelisthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
