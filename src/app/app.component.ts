// src/app/app.component.ts
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// Módulos de Angular Material utilizados en el HTML de este componente
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

// Definición de interfaces para la estructura del menú de productos
export interface SubCategory {
  name: string;
  link?: string;
}

export interface Category {
  name: string;
  subcategories?: SubCategory[];
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // ¡¡¡DEBE APUNTAR A SU PROPIO HTML!!!
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDividerModule
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Auto-part';
  // Ruta de la imagen principal del banner.
  bannerImageUrl: string = 'assets/imagenes/banner.png';
  currentYear: number = new Date().getFullYear(); // Año actual para el footer
  searchTerm: string = ''; // Modelo para el input de búsqueda

  hideNavbar: boolean = false; // Controla la visibilidad de la barra de navegación al hacer scroll
  private lastScrollTop: number = 0; // Ayuda a determinar la dirección del scroll

  // Propiedad clave para controlar la visibilidad del banner en el HTML
  showBanner: boolean = true;

  // Subject utilizado para gestionar la desuscripción de Observables y prevenir fugas de memoria
  private destroy$ = new Subject<void>();

  constructor(private router: Router) { } // Inyección del servicio Router para la navegación

  ngOnInit() {
    // Suscripción a los eventos de navegación del Router
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((event: NavigationEnd) => {
      const routesWithoutBanner = [
        '/login-cliente',
        '/login-cliente-sku',
        '/login-bodeguero',
        '/registrarse',
        '/carrito',
        '/producto-lista'
      ];
      this.showBanner = !routesWithoutBanner.includes(event.urlAfterRedirects);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const scrollThreshold = 110;

    if (st > this.lastScrollTop && st > scrollThreshold) {
      this.hideNavbar = true;
    } else if (st < this.lastScrollTop) {
      this.hideNavbar = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  search() {
    if (this.searchTerm.trim()) {
      console.log('Buscando:', this.searchTerm);
    }
  }

  // Definición de los elementos y subcategorías para el menú desplegable de "Productos"
  menuItems: Category[] = [
    {
      name: 'Tipo de Productos',
      subcategories: [
        { name: 'Ensamblaje', link: '/productos/ensamblaje' },
        { name: 'Neumáticos', link: '/productos/neumaticos' },
        { name: 'Mantenimiento', link: '/productos/mantenimiento' },
      ],
    },
    {
      name: 'Marca',
      subcategories: [
        { name: 'Brembo', link: '/marcas/brembo' },
        { name: 'Mobil 1', link: '/marcas/mobil1' },
      ],
    },
    {
      name: 'Ofertas Especiales',
      link: '/ofertas',
    },
  ];
}