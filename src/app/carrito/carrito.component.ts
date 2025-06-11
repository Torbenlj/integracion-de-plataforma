// src/app/carrito/carrito.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip'; // Importa MatTooltipModule

// Define la interfaz para un ítem del carrito
export interface CarritoItem {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule, // Necesario para mat-raised-button
    MatIconModule,   // Necesario para mat-icon
    MatTooltipModule, // NECESARIO para matTooltip
    CurrencyPipe     // Necesario para el pipe currency en el template
  ]
})
export class CarritoComponent implements OnInit {
  carritoItems: CarritoItem[] = [];
  totalCarrito: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // **Asegúrate de que tus ítems reales tengan 'id' y 'descripcion'**
    // Esto es solo un ejemplo de datos, reemplaza con tus datos reales:
    this.carritoItems = [
      {
        id: '330027',
        nombre: 'Spektra',
        descripcion: 'Base para Notebook de hasta 15.6" con 2 ventiladores y 2 puertos USB (BN-400)...',
        precio: 12290, // Precio de ejemplo en CLP
        imagen: 'assets/imagenes/spektra_bn400.jpg', // **ACTUALIZA ESTA RUTA A TU IMAGEN REAL**
        cantidad: 1
      }
      // Puedes añadir más productos si lo necesitas para probar el scroll
      /*
      ,
      {
        id: '330028',
        nombre: 'Teclado Mecánico',
        descripcion: 'Teclado gaming RGB, switches Cherry MX Blue',
        precio: 45990,
        imagen: 'assets/imagenes/teclado_ejemplo.jpg', // **ACTUALIZA ESTA RUTA A TU IMAGEN REAL**
        cantidad: 2
      },
      {
        id: '330029',
        nombre: 'Mouse Gamer RGB',
        descripcion: 'Mouse ergonómico con sensor óptico de alta precisión.',
        precio: 25000,
        imagen: 'assets/imagenes/mouse_ejemplo.jpg', // **ACTUALIZA ESTA RUTA A TU IMAGEN REAL**
        cantidad: 1
      }
      */
    ];
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.totalCarrito = this.carritoItems.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  aumentarCantidad(item: CarritoItem): void {
    item.cantidad++;
    this.calcularTotal();
  }

  disminuirCantidad(item: CarritoItem): void {
    if (item.cantidad > 1) {
      item.cantidad--;
      this.calcularTotal();
    }
  }

  eliminarItem(itemAEliminar: CarritoItem): void {
    this.carritoItems = this.carritoItems.filter(item => item.id !== itemAEliminar.id);
    this.calcularTotal();
  }

  vaciarCarrito(): void {
    if (confirm('¿Estás seguro de que quieres vaciar todo el carrito?')) {
      this.carritoItems = [];
      this.calcularTotal();
    }
  }

  agregarMasProductos(): void {
    this.router.navigate(['/']); // Redirige a la página principal por ejemplo
  }
}