import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagurutampilComponent } from './datagurutampil.component';

describe('DatagurutampilComponent', () => {
  let component: DatagurutampilComponent;
  let fixture: ComponentFixture<DatagurutampilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagurutampilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagurutampilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
