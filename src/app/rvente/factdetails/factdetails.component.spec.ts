import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactdetailsComponent } from './factdetails.component';

describe('FactdetailsComponent', () => {
  let component: FactdetailsComponent;
  let fixture: ComponentFixture<FactdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
