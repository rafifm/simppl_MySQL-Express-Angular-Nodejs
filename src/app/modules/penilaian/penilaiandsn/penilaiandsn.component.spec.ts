import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaiandsnComponent } from './penilaiandsn.component';

describe('PenilaiandsnComponent', () => {
  let component: PenilaiandsnComponent;
  let fixture: ComponentFixture<PenilaiandsnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaiandsnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaiandsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
