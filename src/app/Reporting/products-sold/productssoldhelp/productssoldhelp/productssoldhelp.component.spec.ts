import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductssoldhelpComponent } from './productssoldhelp.component';

describe('ProductssoldhelpComponent', () => {
  let component: ProductssoldhelpComponent;
  let fixture: ComponentFixture<ProductssoldhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductssoldhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductssoldhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
