import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadosentampilComponent } from './datadosentampil.component';

describe('DatadosentampilComponent', () => {
  let component: DatadosentampilComponent;
  let fixture: ComponentFixture<DatadosentampilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadosentampilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadosentampilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
