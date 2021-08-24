import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfournComponent } from './addfourn.component';

describe('AddfournComponent', () => {
  let component: AddfournComponent;
  let fixture: ComponentFixture<AddfournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfournComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
