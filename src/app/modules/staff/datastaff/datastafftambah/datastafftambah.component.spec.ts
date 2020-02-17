import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastafftambahComponent } from './datastafftambah.component';

describe('DatastafftambahComponent', () => {
  let component: DatastafftambahComponent;
  let fixture: ComponentFixture<DatastafftambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastafftambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastafftambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
