import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourndetailsComponent } from './fourndetails.component';

describe('FourndetailsComponent', () => {
  let component: FourndetailsComponent;
  let fixture: ComponentFixture<FourndetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourndetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
