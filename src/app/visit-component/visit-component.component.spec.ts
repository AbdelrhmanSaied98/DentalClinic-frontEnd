import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitComponentComponent } from './visit-component.component';

describe('VisitComponentComponent', () => {
  let component: VisitComponentComponent;
  let fixture: ComponentFixture<VisitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
