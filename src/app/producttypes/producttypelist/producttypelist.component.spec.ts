import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttypelistComponent } from './producttypelist.component';

describe('ProducttypelistComponent', () => {
  let component: ProducttypelistComponent;
  let fixture: ComponentFixture<ProducttypelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttypelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttypelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
