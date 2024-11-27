import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFComponent } from './display-f.component';

describe('DisplayFComponent', () => {
  let component: DisplayFComponent;
  let fixture: ComponentFixture<DisplayFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFComponent]
    });
    fixture = TestBed.createComponent(DisplayFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
