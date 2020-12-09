import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustproductshelpComponent } from './justproductshelp.component';

describe('JustproductshelpComponent', () => {
  let component: JustproductshelpComponent;
  let fixture: ComponentFixture<JustproductshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustproductshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustproductshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
