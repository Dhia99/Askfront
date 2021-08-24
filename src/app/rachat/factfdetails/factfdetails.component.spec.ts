import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactfdetailsComponent } from './factfdetails.component';

describe('FactfdetailsComponent', () => {
  let component: FactfdetailsComponent;
  let fixture: ComponentFixture<FactfdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactfdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactfdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
