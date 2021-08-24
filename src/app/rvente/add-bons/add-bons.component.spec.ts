import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBonsComponent } from './add-bons.component';

describe('AddBonsComponent', () => {
  let component: AddBonsComponent;
  let fixture: ComponentFixture<AddBonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
