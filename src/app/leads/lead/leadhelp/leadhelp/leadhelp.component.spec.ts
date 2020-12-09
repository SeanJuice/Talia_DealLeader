import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadhelpComponent } from './leadhelp.component';

describe('LeadhelpComponent', () => {
  let component: LeadhelpComponent;
  let fixture: ComponentFixture<LeadhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
