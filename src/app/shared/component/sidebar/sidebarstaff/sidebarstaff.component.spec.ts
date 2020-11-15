import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarstaffComponent } from './sidebarstaff.component';

describe('SidebarstaffComponent', () => {
  let component: SidebarstaffComponent;
  let fixture: ComponentFixture<SidebarstaffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
