import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerhasildaftarComponent } from './berhasildaftar.component';

describe('BerhasildaftarComponent', () => {
  let component: BerhasildaftarComponent;
  let fixture: ComponentFixture<BerhasildaftarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerhasildaftarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerhasildaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
