import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttypeListComponent } from './agenttype-list.component';

describe('AgenttypeListComponent', () => {
  let component: AgenttypeListComponent;
  let fixture: ComponentFixture<AgenttypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenttypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
