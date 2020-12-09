import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLeadHistoryComponent } from './agent-lead-history.component';

describe('AgentLeadHistoryComponent', () => {
  let component: AgentLeadHistoryComponent;
  let fixture: ComponentFixture<AgentLeadHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentLeadHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentLeadHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
