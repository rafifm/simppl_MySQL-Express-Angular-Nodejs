import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuotaSekolahComponent } from './kuota-sekolah.component';

describe('KuotaSekolahComponent', () => {
  let component: KuotaSekolahComponent;
  let fixture: ComponentFixture<KuotaSekolahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuotaSekolahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuotaSekolahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
