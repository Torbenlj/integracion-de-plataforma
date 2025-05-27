import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

interface CarritoItem {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true, // Asegúrate de tener esta propiedad si estás usando standalone components
  imports: [CommonModule], // Añade CommonModule al array de imports
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carritoItems: CarritoItem[] = [];
  totalCarrito: number = 0;

  ngOnInit(): void {
    this.carritoItems = [
      { id: 1, nombre: 'Producto 1', precio: 25.99, imagen: 'imagen1.jpg', cantidad: 2 },
      { id: 2, nombre: 'Producto 2', precio: 12.50, imagen: 'imagen2.jpg', cantidad: 1 }
    ];
    this.calcularTotal();
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

  eliminarItem(item: CarritoItem): void {
    this.carritoItems = this.carritoItems.filter(i => i.id !== item.id);
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.totalCarrito = this.carritoItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }
}