import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttypesComponent } from './producttypes.component';

describe('ProducttypesComponent', () => {
  let component: ProducttypesComponent;
  let fixture: ComponentFixture<ProducttypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
