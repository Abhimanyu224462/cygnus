import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFComponent } from './create-f.component';

describe('CreateFComponent', () => {
  let component: CreateFComponent;
  let fixture: ComponentFixture<CreateFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFComponent]
    });
    fixture = TestBed.createComponent(CreateFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
