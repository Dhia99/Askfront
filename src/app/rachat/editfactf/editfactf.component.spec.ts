import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfactfComponent } from './editfactf.component';

describe('EditfactfComponent', () => {
  let component: EditfactfComponent;
  let fixture: ComponentFixture<EditfactfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfactfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfactfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
