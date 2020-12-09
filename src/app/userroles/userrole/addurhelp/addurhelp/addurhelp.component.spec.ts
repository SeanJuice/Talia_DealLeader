import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddurhelpComponent } from './addurhelp.component';

describe('AddurhelpComponent', () => {
  let component: AddurhelpComponent;
  let fixture: ComponentFixture<AddurhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddurhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddurhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
