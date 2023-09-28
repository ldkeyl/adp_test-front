import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.component.html',
  styleUrls: ['./cambio-contrasena.component.scss'],
})
export class CambioContrasenaComponent {
  constructor(private router: Router, private location: Location) {}

  login() {
    this.router.navigateByUrl('auth/login');
  }
  backClicked() {
    this.location.back();
  }
}
