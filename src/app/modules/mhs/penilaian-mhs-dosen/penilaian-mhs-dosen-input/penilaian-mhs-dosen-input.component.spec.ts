import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianMhsDosenInputComponent } from './penilaian-mhs-dosen-input.component';

describe('PenilaianMhsDosenInputComponent', () => {
  let component: PenilaianMhsDosenInputComponent;
  let fixture: ComponentFixture<PenilaianMhsDosenInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianMhsDosenInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianMhsDosenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
