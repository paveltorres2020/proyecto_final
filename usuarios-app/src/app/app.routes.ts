/* import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/usuarios').then(m => m.Usuarios)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./acerca-de/acerca-de').then(m => m.AcercaDe)
  },
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  }
];
 */
import { Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { AcercaDe } from './acerca-de/acerca-de';

export const routes: Routes = [
  { path: 'usuarios', component: Usuarios },
  { path: 'acerca-de', component: AcercaDe },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' }, // Redirección por defecto
];
