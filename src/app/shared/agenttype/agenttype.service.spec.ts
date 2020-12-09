import { TestBed } from '@angular/core/testing';

import { AgenttypeService } from './agenttype.service';

describe('AgenttypeService', () => {
  let service: AgenttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
