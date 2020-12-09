import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrylisthelpComponent } from './countrylisthelp.component';

describe('CountrylisthelpComponent', () => {
  let component: CountrylisthelpComponent;
  let fixture: ComponentFixture<CountrylisthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrylisthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrylisthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
