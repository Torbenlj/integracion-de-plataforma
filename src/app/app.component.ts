import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';

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
  templateUrl: './app.component.html',
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
    MatMenuModule
  ]
})
export class AppComponent {
  title = 'Auto-part';
  bannerImageUrl: string = 'assets/imagenes/banner.png'; 
  currentYear: number = new Date().getFullYear();
  searchTerm: string = ''; 
  isMenuOpen: boolean = false;

  hideNavbar: boolean = false;
  private lastScrollTop: number = 0;

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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menú:', this.isMenuOpen ? 'Abierto' : 'Cerrado');
  }

  menuItems: Category[] = [
    {
      name: 'Tipo de Productos',
      subcategories: [
        { name: 'Frenos', link: '/productos/frenos' },
        { name: 'Filtros', link: '/productos/filtros' },
        { name: 'Amortiguadores', link: '/productos/amortiguadores' },
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