import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatadosentambahComponent } from './datadosentambah.component';

describe('DatadosentambahComponent', () => {
  let component: DatadosentambahComponent;
  let fixture: ComponentFixture<DatadosentambahComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadosentambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadosentambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
