import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampilanMhsComponent } from './tampilan-mhs.component';

describe('TampilanMhsComponent', () => {
  let component: TampilanMhsComponent;
  let fixture: ComponentFixture<TampilanMhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TampilanMhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TampilanMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
