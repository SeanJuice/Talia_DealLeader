import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionHelpComponent } from './commission-help.component';

describe('CommissionHelpComponent', () => {
  let component: CommissionHelpComponent;
  let fixture: ComponentFixture<CommissionHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
