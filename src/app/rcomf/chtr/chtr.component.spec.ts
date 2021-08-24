import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChtrComponent } from './chtr.component';

describe('ChtrComponent', () => {
  let component: ChtrComponent;
  let fixture: ComponentFixture<ChtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
