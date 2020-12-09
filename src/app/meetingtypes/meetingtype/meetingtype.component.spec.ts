import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingtypeComponent } from './meetingtype.component';

describe('MeetingtypeComponent', () => {
  let component: MeetingtypeComponent;
  let fixture: ComponentFixture<MeetingtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
