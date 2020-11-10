import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelolaperanComponent } from './kelolaperan.component';

describe('KelolaperanComponent', () => {
  let component: KelolaperanComponent;
  let fixture: ComponentFixture<KelolaperanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KelolaperanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KelolaperanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
