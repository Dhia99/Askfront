import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockprComponent } from './stockpr.component';

describe('StockprComponent', () => {
  let component: StockprComponent;
  let fixture: ComponentFixture<StockprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
