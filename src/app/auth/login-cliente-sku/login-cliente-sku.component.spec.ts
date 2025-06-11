import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginClienteSkuComponent } from './login-cliente-sku.component';

describe('LoginClienteSkuComponent', () => {
  let component: LoginClienteSkuComponent;
  let fixture: ComponentFixture<LoginClienteSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginClienteSkuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginClienteSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
