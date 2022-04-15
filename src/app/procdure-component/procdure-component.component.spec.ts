import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcdureComponentComponent } from './procdure-component.component';

describe('ProcdureComponentComponent', () => {
  let component: ProcdureComponentComponent;
  let fixture: ComponentFixture<ProcdureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcdureComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcdureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
