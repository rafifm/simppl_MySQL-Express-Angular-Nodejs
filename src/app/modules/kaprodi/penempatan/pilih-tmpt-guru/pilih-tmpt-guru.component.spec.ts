import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilihTmptGuruComponent } from './pilih-tmpt-guru.component';

describe('PilihTmptGuruComponent', () => {
  let component: PilihTmptGuruComponent;
  let fixture: ComponentFixture<PilihTmptGuruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihTmptGuruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilihTmptGuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
