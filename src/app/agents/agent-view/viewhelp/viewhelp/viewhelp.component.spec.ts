import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhelpComponent } from './viewhelp.component';

describe('ViewhelpComponent', () => {
  let component: ViewhelpComponent;
  let fixture: ComponentFixture<ViewhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
