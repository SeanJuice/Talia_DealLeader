import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentleaddetailsHelpComponent } from './agentleaddetails-help.component';

describe('AgentleaddetailsHelpComponent', () => {
  let component: AgentleaddetailsHelpComponent;
  let fixture: ComponentFixture<AgentleaddetailsHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentleaddetailsHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentleaddetailsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
