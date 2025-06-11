// src/app/producto-lista/producto-lista.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // <-- ¡IMPORTANTE! Añade CurrencyPipe aquí
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // <-- ¡IMPORTANTE! Asegúrate de que MatIconModule esté aquí

// Definición de la interfaz Producto (si no la tienes en un archivo separado)
export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precioTransferencia: number;
  precioOtrosMedios: number;
  imagenUrl: string;
  categoria: string;
  marca: string;
  cantidadDisponible: number;
}

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html', // <-- Ruta correcta al HTML
  styleUrls: ['./producto-lista.component.css'],
  standalone: true, // Asegúrate de que sea standalone
  imports: [
    CommonModule,
    RouterModule, // Para usar routerLink en el HTML (si lo habilitas para detalles)
    MatButtonModule, // Para los botones de Material Design
    MatIconModule,   // Para los iconos de Material Design (como shopping_cart)
    CurrencyPipe     // Para el pipe 'currency'
  ]
})
export class ProductoListaComponent implements OnInit {

  productos: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
    // Datos de productos de ejemplo
    this.productos = [
      {
        id: 'PROD001',
        nombre: 'Pastillas de Freno Cerámicas',
        descripcion: 'Pastillas de freno de alta durabilidad para un frenado suave y silencioso. Compatible con la mayoría de modelos.',
        precioTransferencia: 25990,
        precioOtrosMedios: 27290,
        imagenUrl: 'assets/productos/frenos_pastillas.jpg', // Asegúrate de tener esta imagen
        categoria: 'Frenos',
        marca: 'Brembo',
        cantidadDisponible: 100
      },
      {
        id: 'PROD002',
        nombre: 'Filtro de Aire Deportivo',
        descripcion: 'Mejora el rendimiento y la eficiencia de combustible. Fácil instalación.',
        precioTransferencia: 15490,
        precioOtrosMedios: 16290,
        imagenUrl: 'assets/productos/filtro_aire.jpg', // Asegúrate de tener esta imagen
        categoria: 'Filtros',
        marca: 'K&N',
        cantidadDisponible: 50
      },
      {
        id: 'PROD003',
        nombre: 'Amortiguador Trasero Performance',
        descripcion: 'Mejora la estabilidad y el confort de la suspensión de tu vehículo.',
        precioTransferencia: 45000,
        precioOtrosMedios: 47250,
        imagenUrl: 'assets/productos/amortiguador_trasero.jpg', // Asegúrate de tener esta imagen
        categoria: 'Amortiguadores',
        marca: 'Monroe',
        cantidadDisponible: 30
      },
      {
        id: 'PROD004',
        nombre: 'Aceite Motor Sintético 5W-30',
        descripcion: 'Aceite de motor 100% sintético de alto rendimiento, ideal para motores modernos.',
        precioTransferencia: 8990,
        precioOtrosMedios: 9440,
        imagenUrl: 'assets/productos/aceite_motor.jpg', // Asegúrate de tener esta imagen
        categoria: 'Mantenimiento',
        marca: 'Mobil 1',
        cantidadDisponible: 200
      },
      {
        id: 'PROD005',
        nombre: 'Kit de Ensamblaje de Ruedas',
        descripcion: 'Incluye todas las herramientas y piezas necesarias para montar y equilibrar ruedas.',
        precioTransferencia: 75000,
        precioOtrosMedios: 78750,
        imagenUrl: 'assets/productos/kit_ensamblaje.jpg', // Asegúrate de tener esta imagen
        categoria: 'Ensamblaje',
        marca: 'GenericParts',
        cantidadDisponible: 15
      },
      {
        id: 'PROD006',
        nombre: 'Neumático All-Season 205/55 R16',
        descripcion: 'Neumático para todas las estaciones con excelente agarre en seco y mojado. Larga durabilidad.',
        precioTransferencia: 55000,
        precioOtrosMedios: 57750,
        imagenUrl: 'assets/productos/neumatico_allseason.jpg', // Asegúrate de tener esta imagen
        categoria: 'Neumáticos',
        marca: 'Michelin',
        cantidadDisponible: 80
      }
    ];
  }

  // Método para añadir un producto al carrito
  agregarAlCarrito(producto: Producto): void {
    console.log(`Producto "${producto.nombre}" añadido al carrito.`);
    alert(`"${producto.nombre}" añadido al carrito!`);
  }
}