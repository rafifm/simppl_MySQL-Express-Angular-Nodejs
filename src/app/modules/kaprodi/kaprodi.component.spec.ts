import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaprodiComponent } from './kaprodi.component';

describe('KaprodiComponent', () => {
  let component: KaprodiComponent;
  let fixture: ComponentFixture<KaprodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaprodiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaprodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
