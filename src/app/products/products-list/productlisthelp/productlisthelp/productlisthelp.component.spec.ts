import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlisthelpComponent } from './productlisthelp.component';

describe('ProductlisthelpComponent', () => {
  let component: ProductlisthelpComponent;
  let fixture: ComponentFixture<ProductlisthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlisthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlisthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
