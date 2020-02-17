import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianMhsGuruInputComponent } from './penilaian-mhs-guru-input.component';

describe('PenilaianMhsGuruInputComponent', () => {
  let component: PenilaianMhsGuruInputComponent;
  let fixture: ComponentFixture<PenilaianMhsGuruInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianMhsGuruInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianMhsGuruInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
