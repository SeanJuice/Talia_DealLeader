import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentleaddeatilsComponent } from './agentleaddeatils.component';

describe('AgentleaddeatilsComponent', () => {
  let component: AgentleaddeatilsComponent;
  let fixture: ComponentFixture<AgentleaddeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentleaddeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentleaddeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
