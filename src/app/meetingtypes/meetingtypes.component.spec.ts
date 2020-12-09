import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingtypesComponent } from './meetingtypes.component';

describe('MeetingtypesComponent', () => {
  let component: MeetingtypesComponent;
  let fixture: ComponentFixture<MeetingtypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingtypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
