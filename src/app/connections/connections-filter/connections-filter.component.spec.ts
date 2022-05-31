import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsFilterComponent } from './connections-filter.component';

describe('ConnectionsFilterComponent', () => {
  let component: ConnectionsFilterComponent;
  let fixture: ComponentFixture<ConnectionsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
