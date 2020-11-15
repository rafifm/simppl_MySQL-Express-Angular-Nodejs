import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TambahKuotaComponent } from './tambah-kuota.component';

describe('TambahKuotaComponent', () => {
  let component: TambahKuotaComponent;
  let fixture: ComponentFixture<TambahKuotaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahKuotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahKuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
