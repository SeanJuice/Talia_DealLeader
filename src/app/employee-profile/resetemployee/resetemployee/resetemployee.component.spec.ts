import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetemployeeComponent } from './resetemployee.component';

describe('ResetemployeeComponent', () => {
  let component: ResetemployeeComponent;
  let fixture: ComponentFixture<ResetemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
