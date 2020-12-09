import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryhelpComponent } from './countryhelp.component';

describe('CountryhelpComponent', () => {
  let component: CountryhelpComponent;
  let fixture: ComponentFixture<CountryhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
