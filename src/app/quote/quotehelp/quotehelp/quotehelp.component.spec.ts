import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotehelpComponent } from './quotehelp.component';

describe('QuotehelpComponent', () => {
  let component: QuotehelpComponent;
  let fixture: ComponentFixture<QuotehelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotehelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
