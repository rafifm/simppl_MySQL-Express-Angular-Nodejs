import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianguruComponent } from './penilaianguru.component';

describe('PenilaianguruComponent', () => {
  let component: PenilaianguruComponent;
  let fixture: ComponentFixture<PenilaianguruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianguruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianguruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
