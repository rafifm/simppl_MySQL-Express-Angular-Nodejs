import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamhstambahComponent } from './datamhstambah.component';

describe('DatamhstambahComponent', () => {
  let component: DatamhstambahComponent;
  let fixture: ComponentFixture<DatamhstambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamhstambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamhstambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
