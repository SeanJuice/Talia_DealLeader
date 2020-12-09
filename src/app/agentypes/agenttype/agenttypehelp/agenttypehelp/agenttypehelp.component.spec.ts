import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttypehelpComponent } from './agenttypehelp.component';

describe('AgenttypehelpComponent', () => {
  let component: AgenttypehelpComponent;
  let fixture: ComponentFixture<AgenttypehelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenttypehelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttypehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
