import { Routes } from '@angular/router';
import { AutopartListComponent } from './autopart-list/autopart-list.component';
import { RegistrarseComponent } from './auth/registrarse/registrarse.component'; 
import { LoginClienteComponent } from './auth/login-cliente/login-cliente.component';
import { LoginClienteSkuComponent } from './auth/login-cliente-sku/login-cliente-sku.component';
import { LoginBodegueroComponent } from './auth/login-bodeguero/login-bodeguero.component';
import { PanelControlClienteComponent } from './panel-control-cliente/panel-control-cliente.component';
import { PanelControlClienteSkuComponent } from './panel-control-cliente-sku/panel-control-cliente-sku.component';
import { PanelControlBodegueroComponent } from './panel-control-bodeguero/panel-control-bodeguero.component';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';

import { AutopartDetailComponent } from './autopart-detail/autopart-detail.component';
import { CarritoComponent } from './carrito/carrito.component'; 
export const routes: Routes = [
  { path: '', redirectTo: '/autoparts', pathMatch: 'full' },
  { path: 'autoparts', component: AutopartListComponent },
  { path: 'autoparts/:id', component: AutopartDetailComponent },
  { path: 'login-cliente', component: LoginClienteComponent },
  { path: 'login-cliente-sku', component: LoginClienteSkuComponent },
  { path: 'login-bodeguero', component: LoginBodegueroComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'panel-control-cliente', component: PanelControlClienteComponent },
  { path: 'panel-control-cliente-sku', component: PanelControlClienteSkuComponent },
  { path: 'panel-control-bodeguero', component: PanelControlBodegueroComponent },
  { path: 'carrito', component: CarritoComponent }, 
  { path: 'productos/ensamblaje', component: ProductoListaComponent },
  { path: 'productos/neumaticos', component: ProductoListaComponent },
  { path: 'productos/mantenimiento', component: ProductoListaComponent },
  { path: 'productos/frenos', component: ProductoListaComponent }, 
  { path: 'productos/filtros', component: ProductoListaComponent },
  { path: 'productos/amortiguadores', component: ProductoListaComponent },
  { path: 'productos', component: ProductoListaComponent }, 
  { path: '**', redirectTo: '/autoparts' }
];