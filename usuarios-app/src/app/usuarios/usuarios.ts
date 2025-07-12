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
usuarioEditando: Usuario | null = null;

editar(usuario: Usuario) {
  this.usuarioEditando = { ...usuario };
}

cancelarEdicion() {
  this.usuarioEditando = null;
}

actualizar() {
  if (this.usuarioEditando && this.usuarioEditando.id) {
    this.usuarioService.actualizarUsuario(this.usuarioEditando.id, this.usuarioEditando).subscribe(() => {
      this.usuarioEditando = null;
      this.listar();
    });
  }
}
confirmarEliminar(usuario: Usuario) {
  const confirmado = window.confirm(`¿Estás seguro que deseas eliminar a ${usuario.nombre}?`);
  if (confirmado && usuario.id) {
    this.eliminar(usuario.id);
  }
}


}


