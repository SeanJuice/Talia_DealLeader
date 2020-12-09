import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedialogComponent } from './datedialog.component';

describe('DatedialogComponent', () => {
  let component: DatedialogComponent;
  let fixture: ComponentFixture<DatedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
