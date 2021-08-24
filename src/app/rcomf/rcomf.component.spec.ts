import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcomfComponent } from './rcomf.component';

describe('RcomfComponent', () => {
  let component: RcomfComponent;
  let fixture: ComponentFixture<RcomfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcomfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcomfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
