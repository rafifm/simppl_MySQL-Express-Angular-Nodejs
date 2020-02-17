import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastafftampilComponent } from './datastafftampil.component';

describe('DatastafftampilComponent', () => {
  let component: DatastafftampilComponent;
  let fixture: ComponentFixture<DatastafftampilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastafftampilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastafftampilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
