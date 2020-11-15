import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebardosenComponent } from './sidebardosen.component';

describe('SidebardosenComponent', () => {
  let component: SidebardosenComponent;
  let fixture: ComponentFixture<SidebardosenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebardosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebardosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
