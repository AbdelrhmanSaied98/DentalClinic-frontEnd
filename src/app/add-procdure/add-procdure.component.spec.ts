import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcdureComponent } from './add-procdure.component';

describe('AddProcdureComponent', () => {
  let component: AddProcdureComponent;
  let fixture: ComponentFixture<AddProcdureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProcdureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcdureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
