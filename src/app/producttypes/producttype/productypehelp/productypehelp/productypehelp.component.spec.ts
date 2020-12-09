import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductypehelpComponent } from './productypehelp.component';

describe('ProductypehelpComponent', () => {
  let component: ProductypehelpComponent;
  let fixture: ComponentFixture<ProductypehelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductypehelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductypehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
