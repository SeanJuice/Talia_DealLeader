import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcategorieshelpComponent } from './productcategorieshelp.component';

describe('ProductcategorieshelpComponent', () => {
  let component: ProductcategorieshelpComponent;
  let fixture: ComponentFixture<ProductcategorieshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcategorieshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcategorieshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
