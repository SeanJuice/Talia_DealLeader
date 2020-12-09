import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcategorylisthelpComponent } from './productcategorylisthelp.component';

describe('ProductcategorylisthelpComponent', () => {
  let component: ProductcategorylisthelpComponent;
  let fixture: ComponentFixture<ProductcategorylisthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcategorylisthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcategorylisthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
