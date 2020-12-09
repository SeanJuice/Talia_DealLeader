import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsHelpComponent } from './leads-help.component';

describe('LeadsHelpComponent', () => {
  let component: LeadsHelpComponent;
  let fixture: ComponentFixture<LeadsHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
