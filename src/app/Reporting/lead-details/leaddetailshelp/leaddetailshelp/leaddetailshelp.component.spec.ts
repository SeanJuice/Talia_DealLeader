import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaddetailshelpComponent } from './leaddetailshelp.component';

describe('LeaddetailshelpComponent', () => {
  let component: LeaddetailshelpComponent;
  let fixture: ComponentFixture<LeaddetailshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaddetailshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaddetailshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
