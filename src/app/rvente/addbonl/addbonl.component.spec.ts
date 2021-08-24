import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbonlComponent } from './addbonl.component';

describe('AddbonlComponent', () => {
  let component: AddbonlComponent;
  let fixture: ComponentFixture<AddbonlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbonlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbonlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
