import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBodegueroComponent } from './login-bodeguero.component';

describe('LoginBodegueroComponent', () => {
  let component: LoginBodegueroComponent;
  let fixture: ComponentFixture<LoginBodegueroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginBodegueroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
