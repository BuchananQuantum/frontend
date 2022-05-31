import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBarAdsComponent } from './right-bar-ads.component';

describe('RightBarAdsComponent', () => {
  let component: RightBarAdsComponent;
  let fixture: ComponentFixture<RightBarAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightBarAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBarAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
