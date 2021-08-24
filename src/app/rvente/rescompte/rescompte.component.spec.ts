import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescompteComponent } from './rescompte.component';

describe('RescompteComponent', () => {
  let component: RescompteComponent;
  let fixture: ComponentFixture<RescompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
