import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommfComponent } from './commf.component';

describe('CommfComponent', () => {
  let component: CommfComponent;
  let fixture: ComponentFixture<CommfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
