import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserroleshelpComponent } from './userroleshelp.component';

describe('UserroleshelpComponent', () => {
  let component: UserroleshelpComponent;
  let fixture: ComponentFixture<UserroleshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserroleshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserroleshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
