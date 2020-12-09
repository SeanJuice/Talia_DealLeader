import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductypeshelpComponent } from './productypeshelp.component';

describe('ProductypeshelpComponent', () => {
  let component: ProductypeshelpComponent;
  let fixture: ComponentFixture<ProductypeshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductypeshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductypeshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
