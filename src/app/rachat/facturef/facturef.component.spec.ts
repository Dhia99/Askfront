import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturefComponent } from './facturef.component';

describe('FacturefComponent', () => {
  let component: FacturefComponent;
  let fixture: ComponentFixture<FacturefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
