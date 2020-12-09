import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRegHelpComponent } from './agent-reg-help.component';

describe('AgentRegHelpComponent', () => {
  let component: AgentRegHelpComponent;
  let fixture: ComponentFixture<AgentRegHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentRegHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentRegHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
