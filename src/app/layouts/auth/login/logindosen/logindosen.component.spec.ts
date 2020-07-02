import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindosenComponent } from './logindosen.component';

describe('LogindosenComponent', () => {
  let component: LogindosenComponent;
  let fixture: ComponentFixture<LogindosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
