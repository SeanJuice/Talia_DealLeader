import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentlistHelpComponent } from './agentlist-help.component';

describe('AgentlistHelpComponent', () => {
  let component: AgentlistHelpComponent;
  let fixture: ComponentFixture<AgentlistHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentlistHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentlistHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
