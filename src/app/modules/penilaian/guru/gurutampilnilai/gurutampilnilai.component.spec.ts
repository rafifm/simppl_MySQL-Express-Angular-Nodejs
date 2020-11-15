import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GurutampilnilaiComponent } from './gurutampilnilai.component';

describe('GurutampilnilaiComponent', () => {
  let component: GurutampilnilaiComponent;
  let fixture: ComponentFixture<GurutampilnilaiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GurutampilnilaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurutampilnilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
