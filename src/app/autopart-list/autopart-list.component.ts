import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferCardComponent, Offer } from '../offer-card/offer-card.component'; // Importa el componente y la interfaz

@Component({
  selector: 'app-autopart-list',
  standalone: true,
  imports: [CommonModule, OfferCardComponent],
  templateUrl: './autopart-list.component.html',
  styleUrl: './autopart-list.component.css'
})
export class AutopartListComponent {
  bannerImageUrl: string = 'assets/imagenes/banner2.png';
  // Datos de ejemplo para las ofertas
  offers: Offer[] = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Frenos+Brembo',
      title: 'Oferta Especial: Frenos Brembo',
      description: '', // Vacío
      price: '',       // Vacío
      buttonText: 'Ver Detalles',
      buttonLink: '#'
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/300x200/FFA500/000000?text=Aceite+Mobil',
      title: 'Promoción: Aceites Mobil 1',
      description: '', // Vacío
      price: '',       // Vacío
      buttonText: 'Comprar Ahora',
      buttonLink: '#'
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/300x200/008000/FFFFFF?text=Bujias+NGK',
      title: 'Nuevas Bujías NGK Iridium',
      description: '', // Vacío
      price: '',       // Vacío
      buttonText: 'Más Información',
      buttonLink: '#'
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/300x200/800080/FFFFFF?text=Amortiguadores+Monroe',
      title: 'Amortiguadores Monroe al 30% OFF',
      description: '', // Vacío
      price: '',       // Vacío
      buttonText: 'Ver Catálogo',
      buttonLink: '#'
    },
    {
      id: 5,
      imageUrl: 'https://via.placeholder.com/300x200/FFD700/000000?text=Filtros+Mann',
      title: 'Pack de Filtros Mann',
      description: '', // Vacío
      price: '',       // Vacío
      buttonText: 'Comprar Pack',
      buttonLink: '#'
    },
    {
      id: 6,
      imageUrl: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Neumaticos+Pirelli',
      title: 'Neumáticos Pirelli de Verano',
      description: '', // Vacío
      price: '',       // Vacío
      buttonText: 'Ver Ofertas',
      buttonLink: '#'
    }
    
  ];
}