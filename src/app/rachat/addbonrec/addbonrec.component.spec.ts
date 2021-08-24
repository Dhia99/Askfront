import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbonrecComponent } from './addbonrec.component';

describe('AddbonrecComponent', () => {
  let component: AddbonrecComponent;
  let fixture: ComponentFixture<AddbonrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbonrecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbonrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
