import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenempatanDosenComponent } from './penempatan-dosen.component';

describe('PenempatanDosenComponent', () => {
  let component: PenempatanDosenComponent;
  let fixture: ComponentFixture<PenempatanDosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenempatanDosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenempatanDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
