import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DosentampilnilaiComponent } from './dosentampilnilai.component';

describe('DosentampilnilaiComponent', () => {
  let component: DosentampilnilaiComponent;
  let fixture: ComponentFixture<DosentampilnilaiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DosentampilnilaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosentampilnilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
