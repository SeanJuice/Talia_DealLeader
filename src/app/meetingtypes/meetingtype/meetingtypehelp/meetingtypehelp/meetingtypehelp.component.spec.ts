import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingtypehelpComponent } from './meetingtypehelp.component';

describe('MeetingtypehelpComponent', () => {
  let component: MeetingtypehelpComponent;
  let fixture: ComponentFixture<MeetingtypehelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingtypehelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingtypehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
