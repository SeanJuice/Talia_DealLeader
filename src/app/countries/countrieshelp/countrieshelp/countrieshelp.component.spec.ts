import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieshelpComponent } from './countrieshelp.component';

describe('CountrieshelpComponent', () => {
  let component: CountrieshelpComponent;
  let fixture: ComponentFixture<CountrieshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrieshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrieshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
