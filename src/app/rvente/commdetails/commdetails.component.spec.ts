import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommdetailsComponent } from './commdetails.component';

describe('CommdetailsComponent', () => {
  let component: CommdetailsComponent;
  let fixture: ComponentFixture<CommdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
