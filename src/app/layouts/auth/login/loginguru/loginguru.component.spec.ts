import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginguruComponent } from './loginguru.component';

describe('LoginguruComponent', () => {
  let component: LoginguruComponent;
  let fixture: ComponentFixture<LoginguruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginguruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginguruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
