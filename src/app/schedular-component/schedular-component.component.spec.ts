import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedularComponentComponent } from './schedular-component.component';

describe('SchedularComponentComponent', () => {
  let component: SchedularComponentComponent;
  let fixture: ComponentFixture<SchedularComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedularComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
