import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

// Importaciones de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'; // Si usas selector de rol

// Validador personalizado para confirmar contraseña
export function passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMismatch: true }); // Establece un error si no coinciden
    return { passwordsMismatch: true };
  } else {
    // Si no hay error (coinciden o aún no se han tocado ambos), se limpia el error
    confirmPassword?.setErrors(null);
    return null;
  }
}

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule // Si usas selector de rol
  ]
})
export class RegistrarseComponent implements OnInit {
  registerForm!: FormGroup; // Formulario de registro
  hide = true; // Para la visibilidad de la contraseña

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required], // Nombre completo: requerido
      email: ['', [Validators.required, Validators.email]], // Correo electrónico: requerido y formato de email
      password: ['', [Validators.required, Validators.minLength(6)]], // Contraseña: requerida y mínimo 6 caracteres
      confirmPassword: ['', Validators.required], // Confirmar Contraseña: requerida
      // role: ['cliente'] // Puedes preseleccionar un rol por defecto o dejarlo vacío
    }, { validators: passwordsMatchValidator }); // Añade el validador a nivel de formulario
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Formulario de Registro Válido:', this.registerForm.value);
      // Aquí iría la lógica de registro real (ej. llamar a un servicio)
      // this.servicioAutenticacion.register(this.registerForm.value).subscribe(
      //   respuesta => {
      //     console.log('Registro exitoso', respuesta);
      //     alert('¡Registro exitoso! Por favor, inicia sesión.');
      //     this.router.navigate(['/iniciar-sesion']); // Redirigir al login
      //   },
      //   error => {
      //     console.error('Error en el registro', error);
      //     // Mostrar mensaje de error al usuario
      //   }
      // );

      // Simulación de redirección exitosa
      alert('¡Registro simulado exitoso! Por favor, inicia sesión.');
      this.router.navigate(['/iniciar-sesion']);
    } else {
      console.log('Formulario de Registro Inválido');
      this.registerForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
    }
  }
}