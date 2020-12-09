import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadItemsComponent } from './lead-items.component';

describe('LeadItemsComponent', () => {
  let component: LeadItemsComponent;
  let fixture: ComponentFixture<LeadItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
