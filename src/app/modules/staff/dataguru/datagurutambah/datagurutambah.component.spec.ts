import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagurutambahComponent } from './datagurutambah.component';

describe('DatagurutambahComponent', () => {
  let component: DatagurutambahComponent;
  let fixture: ComponentFixture<DatagurutambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagurutambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagurutambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
