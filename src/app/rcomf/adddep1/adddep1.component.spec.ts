import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adddep1Component } from './adddep1.component';

describe('Adddep1Component', () => {
  let component: Adddep1Component;
  let fixture: ComponentFixture<Adddep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adddep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adddep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
