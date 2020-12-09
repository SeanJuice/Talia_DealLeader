import { TestBed } from '@angular/core/testing';

import { AgentstatusService } from './agentstatus.service';

describe('AgentstatusService', () => {
  let service: AgentstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
