import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahprofilComponent } from './tambahprofil.component';

describe('TambahprofilComponent', () => {
  let component: TambahprofilComponent;
  let fixture: ComponentFixture<TambahprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahprofilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
