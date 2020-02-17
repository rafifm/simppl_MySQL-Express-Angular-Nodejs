import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadosentambahComponent } from './datadosentambah.component';

describe('DatadosentambahComponent', () => {
  let component: DatadosentambahComponent;
  let fixture: ComponentFixture<DatadosentambahComponent>;

  beforeEach(async(() => {
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
