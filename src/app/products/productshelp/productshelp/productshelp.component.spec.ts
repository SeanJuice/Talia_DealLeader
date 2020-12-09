import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductshelpComponent } from './productshelp.component';

describe('ProductshelpComponent', () => {
  let component: ProductshelpComponent;
  let fixture: ComponentFixture<ProductshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
