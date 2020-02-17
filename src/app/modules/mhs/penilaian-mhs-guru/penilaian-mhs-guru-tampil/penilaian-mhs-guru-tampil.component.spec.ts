import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianMhsGuruTampilComponent } from './penilaian-mhs-guru-tampil.component';

describe('PenilaianMhsGuruTampilComponent', () => {
  let component: PenilaianMhsGuruTampilComponent;
  let fixture: ComponentFixture<PenilaianMhsGuruTampilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianMhsGuruTampilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianMhsGuruTampilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
