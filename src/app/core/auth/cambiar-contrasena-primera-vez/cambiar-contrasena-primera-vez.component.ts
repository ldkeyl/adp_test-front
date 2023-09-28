import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-contrasena-primera-vez',
  templateUrl: './cambiar-contrasena-primera-vez.component.html',
  styleUrls: ['./cambiar-contrasena-primera-vez.component.scss']
})
export class CambiarContrasenaPrimeraVezComponent {
  constructor(private router: Router) {}

    primeraVezCambio() {
    this.router.navigateByUrl('auth/cambio-contraseña');
  }
}
