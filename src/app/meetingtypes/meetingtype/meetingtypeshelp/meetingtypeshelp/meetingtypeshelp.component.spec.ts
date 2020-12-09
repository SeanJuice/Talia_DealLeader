import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingtypeshelpComponent } from './meetingtypeshelp.component';

describe('MeetingtypeshelpComponent', () => {
  let component: MeetingtypeshelpComponent;
  let fixture: ComponentFixture<MeetingtypeshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingtypeshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingtypeshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
