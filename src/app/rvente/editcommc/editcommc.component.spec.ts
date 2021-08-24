import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcommcComponent } from './editcommc.component';

describe('EditcommcComponent', () => {
  let component: EditcommcComponent;
  let fixture: ComponentFixture<EditcommcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcommcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcommcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
