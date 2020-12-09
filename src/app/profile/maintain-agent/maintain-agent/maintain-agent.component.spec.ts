import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainAgentComponent } from './maintain-agent.component';

describe('MaintainAgentComponent', () => {
  let component: MaintainAgentComponent;
  let fixture: ComponentFixture<MaintainAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
