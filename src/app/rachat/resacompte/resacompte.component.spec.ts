import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResacompteComponent } from './resacompte.component';

describe('ResacompteComponent', () => {
  let component: ResacompteComponent;
  let fixture: ComponentFixture<ResacompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResacompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResacompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
