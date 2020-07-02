import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginkaprodiComponent } from './loginkaprodi.component';

describe('LoginkaprodiComponent', () => {
  let component: LoginkaprodiComponent;
  let fixture: ComponentFixture<LoginkaprodiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginkaprodiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginkaprodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
