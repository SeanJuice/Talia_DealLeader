import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionupdateComponent } from './commissionupdate.component';

describe('CommissionupdateComponent', () => {
  let component: CommissionupdateComponent;
  let fixture: ComponentFixture<CommissionupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
