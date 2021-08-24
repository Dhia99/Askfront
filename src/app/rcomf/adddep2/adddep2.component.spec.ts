import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adddep2Component } from './adddep2.component';

describe('Adddep2Component', () => {
  let component: Adddep2Component;
  let fixture: ComponentFixture<Adddep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adddep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adddep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
