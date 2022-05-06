import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalConnectionsComponent } from './local-connections.component';

describe('LocalConnectionsComponent', () => {
  let component: LocalConnectionsComponent;
  let fixture: ComponentFixture<LocalConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
