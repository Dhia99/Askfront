import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinvComponent } from './addinv.component';

describe('AddinvComponent', () => {
  let component: AddinvComponent;
  let fixture: ComponentFixture<AddinvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
