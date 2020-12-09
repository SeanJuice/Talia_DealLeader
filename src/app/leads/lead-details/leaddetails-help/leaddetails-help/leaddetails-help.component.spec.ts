import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaddetailsHelpComponent } from './leaddetails-help.component';

describe('LeaddetailsHelpComponent', () => {
  let component: LeaddetailsHelpComponent;
  let fixture: ComponentFixture<LeaddetailsHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaddetailsHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaddetailsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
