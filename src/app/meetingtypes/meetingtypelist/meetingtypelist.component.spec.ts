import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingtypelistComponent } from './meetingtypelist.component';

describe('MeetingtypelistComponent', () => {
  let component: MeetingtypelistComponent;
  let fixture: ComponentFixture<MeetingtypelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingtypelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingtypelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
