import { Routes } from '@angular/router';
import { AutopartListComponent } from './autopart-list/autopart-list.component';
import { AutopartDetailComponent } from './autopart-detail/autopart-detail.component';
import { CarritoComponent } from './carrito/carrito.component'; 
export const routes: Routes = [
  { path: '', redirectTo: '/autoparts', pathMatch: 'full' },
  { path: 'autoparts', component: AutopartListComponent },
  { path: 'autoparts/:id', component: AutopartDetailComponent },
  { path: 'carrito', component: CarritoComponent }, 
  { path: '**', redirectTo: '/autoparts' }
];