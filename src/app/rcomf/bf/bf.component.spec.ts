import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfComponent } from './bf.component';

describe('BfComponent', () => {
  let component: BfComponent;
  let fixture: ComponentFixture<BfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
