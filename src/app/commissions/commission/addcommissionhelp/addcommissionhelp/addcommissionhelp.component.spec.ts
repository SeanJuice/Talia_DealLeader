import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommissionhelpComponent } from './addcommissionhelp.component';

describe('AddcommissionhelpComponent', () => {
  let component: AddcommissionhelpComponent;
  let fixture: ComponentFixture<AddcommissionhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcommissionhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommissionhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
