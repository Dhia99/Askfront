import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfournComponent } from './editfourn.component';

describe('EditfournComponent', () => {
  let component: EditfournComponent;
  let fixture: ComponentFixture<EditfournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfournComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
