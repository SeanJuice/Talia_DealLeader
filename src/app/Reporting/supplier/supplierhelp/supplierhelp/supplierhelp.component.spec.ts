import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierhelpComponent } from './supplierhelp.component';

describe('SupplierhelpComponent', () => {
  let component: SupplierhelpComponent;
  let fixture: ComponentFixture<SupplierhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
