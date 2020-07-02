import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginstaffComponent } from './loginstaff.component';

describe('LoginstaffComponent', () => {
  let component: LoginstaffComponent;
  let fixture: ComponentFixture<LoginstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
