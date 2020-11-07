import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosentambahnilaiutsComponent } from './dosentambahnilaiuts.component';

describe('DosentambahnilaiutsComponent', () => {
  let component: DosentambahnilaiutsComponent;
  let fixture: ComponentFixture<DosentambahnilaiutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosentambahnilaiutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DosentambahnilaiutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
