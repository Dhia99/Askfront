import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonldetailsComponent } from './bonldetails.component';

describe('BonldetailsComponent', () => {
  let component: BonldetailsComponent;
  let fixture: ComponentFixture<BonldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
