import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttypesComponent } from './agenttypes.component';

describe('AgenttypesComponent', () => {
  let component: AgenttypesComponent;
  let fixture: ComponentFixture<AgenttypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenttypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
