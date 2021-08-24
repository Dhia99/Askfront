import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldepComponent } from './soldep.component';

describe('SoldepComponent', () => {
  let component: SoldepComponent;
  let fixture: ComponentFixture<SoldepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
