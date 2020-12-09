import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentleadsHelpComponent } from './agentleads-help.component';

describe('AgentleadsHelpComponent', () => {
  let component: AgentleadsHelpComponent;
  let fixture: ComponentFixture<AgentleadsHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentleadsHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentleadsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
