import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatamhstampilComponent } from './datamhstampil.component';

describe('DatamhstampilComponent', () => {
  let component: DatamhstampilComponent;
  let fixture: ComponentFixture<DatamhstampilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamhstampilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamhstampilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
