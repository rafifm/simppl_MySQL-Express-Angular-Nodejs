import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenempatanMahasiswaComponent } from './penempatan-mahasiswa.component';

describe('PenempatanMahasiswaComponent', () => {
  let component: PenempatanMahasiswaComponent;
  let fixture: ComponentFixture<PenempatanMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenempatanMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenempatanMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
