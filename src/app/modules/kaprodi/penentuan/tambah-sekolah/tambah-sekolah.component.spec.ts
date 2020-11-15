import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TambahSekolahComponent } from './tambah-sekolah.component';

describe('TambahSekolahComponent', () => {
  let component: TambahSekolahComponent;
  let fixture: ComponentFixture<TambahSekolahComponent>;

  beforeEach(waitForAsync(() => {
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
