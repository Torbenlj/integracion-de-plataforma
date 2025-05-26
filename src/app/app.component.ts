import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf
import { RouterModule } from '@angular/router'; // Para router-outlet y routerLink
import { FormsModule } from '@angular/forms'; // ¡Para [(ngModel)] en el campo de búsqueda!

// Módulos de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';        // ¡Para matInput!
import { MatFormFieldModule } from '@angular/material/form-field'; // ¡Para mat-form-field!


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // ¡Añade FormsModule aquí!
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,        // ¡Añade MatInputModule aquí!
    MatFormFieldModule // ¡Añade MatFormFieldModule aquí!
  ]
})
export class AppComponent {
  title = 'Auto-part';
  bannerImageUrl: string = 'assets/imagenes/banner.png';
  currentYear: number = new Date().getFullYear();
  searchTerm: string = ''; // Para el valor del campo de búsqueda
  isMenuOpen: boolean = false; // Controla si el menú desplegable está abierto

  hideNavbar: boolean = false;
  private lastScrollTop: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // La lógica de ocultar/mostrar el navbar principal se mantiene,
    // pero ahora solo aplica al `mat-toolbar` inferior.
    const st = window.pageYOffset || document.documentElement.scrollTop;
    // Ocultar si se desplaza hacia abajo y no está en la parte superior,
    // y el scroll supera la altura de las dos barras superiores (40px + 70px = 110px)
    if (st > this.lastScrollTop && st > 110) {
      this.hideNavbar = true;
    } else if (st < this.lastScrollTop) { // Mostrar si se desplaza hacia arriba
      this.hideNavbar = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // Para iOS Safari
  }

  // Lógica para la búsqueda
  search() {
    console.log('Buscando:', this.searchTerm);
    // Aquí puedes añadir la lógica para redirigir a una página de resultados
    // o filtrar elementos en la página actual.
  }

  // Lógica para el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menú:', this.isMenuOpen ? 'Abierto' : 'Cerrado');
  }
}