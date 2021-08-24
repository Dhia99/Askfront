import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacturefComponent } from './addfacturef.component';

describe('AddfacturefComponent', () => {
  let component: AddfacturefComponent;
  let fixture: ComponentFixture<AddfacturefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfacturefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfacturefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
