import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionlisthelpComponent } from './commissionlisthelp.component';

describe('CommissionlisthelpComponent', () => {
  let component: CommissionlisthelpComponent;
  let fixture: ComponentFixture<CommissionlisthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionlisthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionlisthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
