import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampilanDosenComponent } from './tampilan-dosen.component';

describe('TampilanDosenComponent', () => {
  let component: TampilanDosenComponent;
  let fixture: ComponentFixture<TampilanDosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TampilanDosenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TampilanDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
