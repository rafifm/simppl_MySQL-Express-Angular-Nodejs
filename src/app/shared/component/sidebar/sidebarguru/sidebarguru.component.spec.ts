import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarguruComponent } from './sidebarguru.component';

describe('SidebarguruComponent', () => {
  let component: SidebarguruComponent;
  let fixture: ComponentFixture<SidebarguruComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarguruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarguruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
