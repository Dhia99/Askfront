import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RventeComponent } from './rvente.component';

describe('RventeComponent', () => {
  let component: RventeComponent;
  let fixture: ComponentFixture<RventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
