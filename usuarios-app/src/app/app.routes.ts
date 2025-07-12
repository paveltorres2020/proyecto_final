import { Routes } from '@angular/router';

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
