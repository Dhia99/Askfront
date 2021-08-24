import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbonlComponent } from './editbonl.component';

describe('EditbonlComponent', () => {
  let component: EditbonlComponent;
  let fixture: ComponentFixture<EditbonlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbonlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbonlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
