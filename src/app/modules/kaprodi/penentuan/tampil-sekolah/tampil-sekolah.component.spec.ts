import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TampilSekolahComponent } from './tampil-sekolah.component';

describe('TampilSekolahComponent', () => {
  let component: TampilSekolahComponent;
  let fixture: ComponentFixture<TampilSekolahComponent>;

  beforeEach(waitForAsync(() => {
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
