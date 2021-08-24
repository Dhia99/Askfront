import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoComponent } from './treso.component';

describe('TresoComponent', () => {
  let component: TresoComponent;
  let fixture: ComponentFixture<TresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
