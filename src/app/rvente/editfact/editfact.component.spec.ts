import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfactComponent } from './editfact.component';

describe('EditfactComponent', () => {
  let component: EditfactComponent;
  let fixture: ComponentFixture<EditfactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
