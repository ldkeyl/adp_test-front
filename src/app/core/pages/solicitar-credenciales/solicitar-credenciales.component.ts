import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-credenciales',
  templateUrl: './solicitar-credenciales.component.html',
  styleUrls: ['./solicitar-credenciales.component.scss']
})
export class SolicitarCredencialesComponent {
  constructor(private router: Router) {}

  solicitarCredenciales() {
    this.router.navigateByUrl('dashboard/validar-token');
    // empresa-sin-contratos
    // empresa-no-puede-solicitar-pases
  }
}
 