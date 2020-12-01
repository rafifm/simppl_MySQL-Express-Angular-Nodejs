import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampilNilaiComponent } from './tampil-nilai.component';

describe('TampilNilaiComponent', () => {
  let component: TampilNilaiComponent;
  let fixture: ComponentFixture<TampilNilaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TampilNilaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TampilNilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
