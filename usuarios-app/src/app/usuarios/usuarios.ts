import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { UsuarioService, Usuario } from '../services/usuario';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './usuarios.html'
})
export class Usuarios {
  usuarios: Usuario[] = [];
  nuevo: Usuario = { nombre: '', email: '' };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.usuarioService.getUsuarios().subscribe((data) => this.usuarios = data);
  }

  guardar() {
    this.usuarioService.crearUsuario(this.nuevo).subscribe(() => {
      this.nuevo = { nombre: '', email: '' };
      this.listar();
    });
  }

  eliminar(id: number) {
    this.usuarioService.eliminarUsuario(id).subscribe(() => this.listar());
  }
}
