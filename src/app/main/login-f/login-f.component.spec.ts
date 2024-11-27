import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFComponent } from './login-f.component';

describe('LoginFComponent', () => {
  let component: LoginFComponent;
  let fixture: ComponentFixture<LoginFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFComponent]
    });
    fixture = TestBed.createComponent(LoginFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
