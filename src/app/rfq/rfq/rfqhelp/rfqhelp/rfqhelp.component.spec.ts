import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqhelpComponent } from './rfqhelp.component';

describe('RfqhelpComponent', () => {
  let component: RfqhelpComponent;
  let fixture: ComponentFixture<RfqhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfqhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
