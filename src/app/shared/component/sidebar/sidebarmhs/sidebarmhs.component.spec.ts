import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmhsComponent } from './sidebarmhs.component';

describe('SidebarmhsComponent', () => {
  let component: SidebarmhsComponent;
  let fixture: ComponentFixture<SidebarmhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarmhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarmhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
