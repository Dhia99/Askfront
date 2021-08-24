import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcomfcopmteComponent } from './rcomfcopmte.component';

describe('RcomfcopmteComponent', () => {
  let component: RcomfcopmteComponent;
  let fixture: ComponentFixture<RcomfcopmteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcomfcopmteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcomfcopmteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
