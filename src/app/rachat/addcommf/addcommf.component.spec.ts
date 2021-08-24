import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommfComponent } from './addcommf.component';

describe('AddcommfComponent', () => {
  let component: AddcommfComponent;
  let fixture: ComponentFixture<AddcommfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcommfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
