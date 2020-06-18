import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilihTmptDosenComponent } from './pilih-tmpt-dosen.component';

describe('PilihTmptDosenComponent', () => {
  let component: PilihTmptDosenComponent;
  let fixture: ComponentFixture<PilihTmptDosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihTmptDosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilihTmptDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
