import { Routes } from '@angular/router';
import { AutopartListComponent } from './autopart-list/autopart-list.component';
import { AutopartDetailComponent } from './autopart-detail/autopart-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/autoparts', pathMatch: 'full' }, // Redirige la ruta raíz a la lista
  { path: 'autoparts', component: AutopartListComponent }, // Cuando la URL es /autoparts, muestra AutopartListComponent
  { path: 'autoparts/:id', component: AutopartDetailComponent }, // Para ver detalles de una autoparte por ID
  { path: '**', redirectTo: '/autoparts' } // Si la URL no coincide con ninguna, redirige a /autoparts
];