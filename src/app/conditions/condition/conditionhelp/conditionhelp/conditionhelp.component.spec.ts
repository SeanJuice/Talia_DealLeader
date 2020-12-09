import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionhelpComponent } from './conditionhelp.component';

describe('ConditionhelpComponent', () => {
  let component: ConditionhelpComponent;
  let fixture: ComponentFixture<ConditionhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
