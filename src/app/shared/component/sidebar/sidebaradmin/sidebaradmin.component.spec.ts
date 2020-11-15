import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebaradminComponent } from './sidebaradmin.component';

describe('SidebaradminComponent', () => {
  let component: SidebaradminComponent;
  let fixture: ComponentFixture<SidebaradminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebaradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
