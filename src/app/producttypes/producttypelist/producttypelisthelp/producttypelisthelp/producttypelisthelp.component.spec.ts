import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttypelisthelpComponent } from './producttypelisthelp.component';

describe('ProducttypelisthelpComponent', () => {
  let component: ProducttypelisthelpComponent;
  let fixture: ComponentFixture<ProducttypelisthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttypelisthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttypelisthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
