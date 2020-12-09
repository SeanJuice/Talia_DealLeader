import { TestBed } from '@angular/core/testing';

import { MeetingtypeService } from './meetingtype.service';

describe('MeetingtypeService', () => {
  let service: MeetingtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
