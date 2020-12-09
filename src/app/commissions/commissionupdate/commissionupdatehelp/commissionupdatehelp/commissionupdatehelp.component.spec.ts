import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionupdatehelpComponent } from './commissionupdatehelp.component';

describe('CommissionupdatehelpComponent', () => {
  let component: CommissionupdatehelpComponent;
  let fixture: ComponentFixture<CommissionupdatehelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionupdatehelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionupdatehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
