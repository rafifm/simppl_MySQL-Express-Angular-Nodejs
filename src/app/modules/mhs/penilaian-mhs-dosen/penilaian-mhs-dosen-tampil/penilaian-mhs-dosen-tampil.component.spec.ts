import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianMhsDosenTampilComponent } from './penilaian-mhs-dosen-tampil.component';

describe('PenilaianMhsDosenTampilComponent', () => {
  let component: PenilaianMhsDosenTampilComponent;
  let fixture: ComponentFixture<PenilaianMhsDosenTampilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianMhsDosenTampilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianMhsDosenTampilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
