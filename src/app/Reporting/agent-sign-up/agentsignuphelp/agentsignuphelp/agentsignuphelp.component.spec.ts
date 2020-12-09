import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsignuphelpComponent } from './agentsignuphelp.component';

describe('AgentsignuphelpComponent', () => {
  let component: AgentsignuphelpComponent;
  let fixture: ComponentFixture<AgentsignuphelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsignuphelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsignuphelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
