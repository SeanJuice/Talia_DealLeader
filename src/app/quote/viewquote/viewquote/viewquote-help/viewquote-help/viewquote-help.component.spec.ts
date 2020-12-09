import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquoteHelpComponent } from './viewquote-help.component';

describe('ViewquoteHelpComponent', () => {
  let component: ViewquoteHelpComponent;
  let fixture: ComponentFixture<ViewquoteHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewquoteHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquoteHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
