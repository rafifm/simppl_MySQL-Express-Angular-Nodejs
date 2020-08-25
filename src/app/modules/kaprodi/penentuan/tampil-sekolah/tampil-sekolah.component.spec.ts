import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TampilSekolahComponent } from './tampil-sekolah.component';

describe('TampilSekolahComponent', () => {
  let component: TampilSekolahComponent;
  let fixture: ComponentFixture<TampilSekolahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TampilSekolahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TampilSekolahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
