import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttypeshelpComponent } from './agenttypeshelp.component';

describe('AgenttypeshelpComponent', () => {
  let component: AgenttypeshelpComponent;
  let fixture: ComponentFixture<AgenttypeshelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenttypeshelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttypeshelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
