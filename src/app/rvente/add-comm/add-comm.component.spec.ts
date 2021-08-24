import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommComponent } from './add-comm.component';

describe('AddCommComponent', () => {
  let component: AddCommComponent;
  let fixture: ComponentFixture<AddCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
