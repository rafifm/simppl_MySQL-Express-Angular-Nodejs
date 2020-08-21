import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamhstampilComponent } from './datamhstampil.component';

describe('DatamhstampilComponent', () => {
  let component: DatamhstampilComponent;
  let fixture: ComponentFixture<DatamhstampilComponent>;

  beforeEach(async(() => {
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
