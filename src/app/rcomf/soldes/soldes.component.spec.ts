import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldesComponent } from './soldes.component';

describe('SoldesComponent', () => {
  let component: SoldesComponent;
  let fixture: ComponentFixture<SoldesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
