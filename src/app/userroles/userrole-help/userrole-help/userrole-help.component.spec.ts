import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserroleHelpComponent } from './userrole-help.component';

describe('UserroleHelpComponent', () => {
  let component: UserroleHelpComponent;
  let fixture: ComponentFixture<UserroleHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserroleHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserroleHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
