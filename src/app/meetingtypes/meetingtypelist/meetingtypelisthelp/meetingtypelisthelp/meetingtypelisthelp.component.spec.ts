import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingtypelisthelpComponent } from './meetingtypelisthelp.component';

describe('MeetingtypelisthelpComponent', () => {
  let component: MeetingtypelisthelpComponent;
  let fixture: ComponentFixture<MeetingtypelisthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingtypelisthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingtypelisthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
