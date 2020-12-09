import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttypeComponent } from './agenttype.component';

describe('AgenttypeComponent', () => {
  let component: AgenttypeComponent;
  let fixture: ComponentFixture<AgenttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
