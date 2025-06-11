import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login-bodeguero', // CAMBIO AQUÍ
  templateUrl: './login-bodeguero.component.html',
  styleUrls: ['./login-bodeguero.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LoginBodegueroComponent implements OnInit { // CAMBIO AQUÍ
  loginForm!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario de Login Bodeguero Válido:', this.loginForm.value);
      // Lógica de autenticación para Bodegueros
      alert('¡Inicio de sesión simulado exitoso para Bodeguero!');
      this.router.navigate(['/panel-control-bodeguero']); // Redirigir a un panel de control específico
    } else {
      console.log('Formulario de Login Bodeguero Inválido');
      this.loginForm.markAllAsTouched();
    }
  }
}