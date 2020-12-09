import { TestBed } from '@angular/core/testing';

import { AgentLeadsService } from './agent-leads.service';

describe('AgentLeadsService', () => {
  let service: AgentLeadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentLeadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
