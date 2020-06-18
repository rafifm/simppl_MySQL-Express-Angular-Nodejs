import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSekolahComponent } from './tambah-sekolah.component';

describe('TambahSekolahComponent', () => {
  let component: TambahSekolahComponent;
  let fixture: ComponentFixture<TambahSekolahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahSekolahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahSekolahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
