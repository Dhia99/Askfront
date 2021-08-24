import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisdetailsComponent } from './devisdetails.component';

describe('DevisdetailsComponent', () => {
  let component: DevisdetailsComponent;
  let fixture: ComponentFixture<DevisdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
