import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PilihTmptMhsComponent } from './pilih-tmpt-mhs.component';

describe('PilihTmptMhsComponent', () => {
  let component: PilihTmptMhsComponent;
  let fixture: ComponentFixture<PilihTmptMhsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihTmptMhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilihTmptMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
