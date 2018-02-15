import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Guards

//import Components
import { HomeComponent } from './components/home/home.component';;
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';


import { usuarioRoutes } from './components/usuario/usuario.routing';


const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ 
		path: 'usuario/:id', 
		component: UsuarioComponent,
		children: usuarioRoutes
	},
	{ path: '', pathMatch: 'full', redirectTo: 'home'},
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash:true});
