import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOption } from '../../interface/menu-option.interface';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {


  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
  menuOptions: MenuOption[] = [
    { title: 'Solicitar Credenciales', url: '/dashboard/solicitar-credenciales'},
    { title: 'Empresa Sin Contratos', url: '/dashboard/empresa-sin-contratos'},
  ];

  ModulosOptions: MenuOption[] = [
    { title: 'Modulo 1', url: '/dashboard/solicitar-credenciales'},
    { title: 'Modulo 2', url: '/dashboard/empresa-sin-contratos'},
  ];

  logout(): void {
  }
  getMenuOptions(): MenuOption[] {
    return [...this.menuOptions];
  }
  getModulos(): MenuOption[] {
    return [...this.ModulosOptions];
  }
}
