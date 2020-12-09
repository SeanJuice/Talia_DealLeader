import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentleadhistoryelpComponent } from './agentleadhistoryelp.component';

describe('AgentleadhistoryelpComponent', () => {
  let component: AgentleadhistoryelpComponent;
  let fixture: ComponentFixture<AgentleadhistoryelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentleadhistoryelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentleadhistoryelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
