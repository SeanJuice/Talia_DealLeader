import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttypelisthelpComponent } from './agenttypelisthelp.component';

describe('AgenttypelisthelpComponent', () => {
  let component: AgenttypelisthelpComponent;
  let fixture: ComponentFixture<AgenttypelisthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenttypelisthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttypelisthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
