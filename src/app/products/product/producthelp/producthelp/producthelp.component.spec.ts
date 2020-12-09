import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthelpComponent } from './producthelp.component';

describe('ProducthelpComponent', () => {
  let component: ProducthelpComponent;
  let fixture: ComponentFixture<ProducthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
