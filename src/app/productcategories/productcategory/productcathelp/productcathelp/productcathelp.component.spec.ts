import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcathelpComponent } from './productcathelp.component';

describe('ProductcathelpComponent', () => {
  let component: ProductcathelpComponent;
  let fixture: ComponentFixture<ProductcathelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcathelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcathelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
