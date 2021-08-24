import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchtrComponent } from './addchtr.component';

describe('AddchtrComponent', () => {
  let component: AddchtrComponent;
  let fixture: ComponentFixture<AddchtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddchtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
