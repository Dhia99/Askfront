import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonrecComponent } from './bonrec.component';

describe('BonrecComponent', () => {
  let component: BonrecComponent;
  let fixture: ComponentFixture<BonrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonrecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
