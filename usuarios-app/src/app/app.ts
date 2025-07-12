import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <a routerLink="/usuarios">Usuarios</a> |
      <a routerLink="/acerca-de">Acerca de</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
