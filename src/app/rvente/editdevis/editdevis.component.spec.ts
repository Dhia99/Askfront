import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdevisComponent } from './editdevis.component';

describe('EditdevisComponent', () => {
  let component: EditdevisComponent;
  let fixture: ComponentFixture<EditdevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
