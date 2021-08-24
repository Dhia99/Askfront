import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RachatComponent } from './rachat.component';

describe('RachatComponent', () => {
  let component: RachatComponent;
  let fixture: ComponentFixture<RachatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RachatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
