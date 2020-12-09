import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotcrudComponent } from './slotcrud.component';

describe('SlotcrudComponent', () => {
  let component: SlotcrudComponent;
  let fixture: ComponentFixture<SlotcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
