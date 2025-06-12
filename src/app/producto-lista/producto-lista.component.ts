// src/app/producto-lista/producto-lista.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../servicios/api.service';


export interface Producto {
  sku: string;
  nombre_producto: string;
  id_tipo_producto: number;
  precio_b2b: number;
  precio_b2c: number;
  descripcion_producto: string;
  id_marca: number;
  imagen: string; 
}


@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    CurrencyPipe
  ]
})
export class ProductoListaComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  productos: Producto[] = [];

  cargarProductos(): void {
    this.apiService.listarProductos().subscribe(
      (productos) => {
        console.log('Productos recibidos:', productos);
        this.productos = productos.map((producto: Producto) => { 
          const imagePath = producto.imagen 
            ? `assets/imagenes/${producto.imagen}`
            : `https://placehold.co/400x300/E0F2F7/000000?text=${encodeURIComponent(producto.nombre_producto)}`;
          
          return {
            ...producto,
            imagen: imagePath
          };
        });

        console.log(this.productos)
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }
/** 
agregarAlCarrito(producto: Producto): void {
  this.apiService.agregarAlCarrito(producto.sku).subscribe({
    next: (respuesta) => {
      console.log('Producto agregado al carrito:', respuesta);
      alert(`Producto "${producto.nombre_producto}" agregado al carrito.`);
    },
    error: (error) => {
      console.error('Error al agregar al carrito:', error);
      alert('Hubo un error al agregar el producto al carrito.');
    }
  });
}*/

}