import { Routes } from '@angular/router';

//import Components
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';


export const usuarioRoutes: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'editar'},
  { path: '**', pathMatch: 'full', redirectTo: 'editar'}
];
