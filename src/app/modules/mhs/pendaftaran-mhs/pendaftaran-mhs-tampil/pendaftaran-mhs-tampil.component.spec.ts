import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranMhsTampilComponent } from './pendaftaran-mhs-tampil.component';

describe('PendaftaranMhsTampilComponent', () => {
  let component: PendaftaranMhsTampilComponent;
  let fixture: ComponentFixture<PendaftaranMhsTampilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranMhsTampilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranMhsTampilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
