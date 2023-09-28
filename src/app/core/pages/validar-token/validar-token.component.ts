import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-token',
  templateUrl: './validar-token.component.html',
  styleUrls: ['./validar-token.component.scss']
})
export class ValidarTokenComponent {
  constructor(private router: Router) {}

  bienvenidos() {
    this.router.navigateByUrl('Bienvenida');
  }
}
