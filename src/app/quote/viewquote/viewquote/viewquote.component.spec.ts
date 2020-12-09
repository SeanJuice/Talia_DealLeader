import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquoteComponent } from './viewquote.component';

describe('ViewquoteComponent', () => {
  let component: ViewquoteComponent;
  let fixture: ComponentFixture<ViewquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
