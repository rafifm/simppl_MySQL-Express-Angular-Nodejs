import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurutampbahnilaiComponent } from './gurutampbahnilai.component';

describe('GurutampbahnilaiComponent', () => {
  let component: GurutampbahnilaiComponent;
  let fixture: ComponentFixture<GurutampbahnilaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurutampbahnilaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurutampbahnilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
