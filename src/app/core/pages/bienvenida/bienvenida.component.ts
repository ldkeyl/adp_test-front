import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
})
export class BienvenidaComponent {
  constructor(private router: Router) {}

  credenciales() {
    this.router.navigateByUrl('auth/cambiar-contraseña-primera-vez');
  }
  requisitos() {
    this.router.navigateByUrl('dashboard/solicitar-credenciales');
  }
}
