import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-roles',
  templateUrl: './ver-roles.component.html',
  styleUrls: ['./ver-roles.component.scss']
})
export class VerRolesComponent {



  displayedColumns = ['codigo', 'nombre', 'descripcion', ];
  dataSource = ELEMENT_DATA;
}
export interface Requisitos {
  codigo: String;
  nombre: string;
  descripcion: string;
}


const ELEMENT_DATA: Requisitos[] = [
  {
    codigo: 'RL0001',
    nombre: 'Administrador',
    descripcion: 'El rol administrador permite una gestión integral de todos los',
  },
  {
    codigo: 'José',
    nombre: 'Administrador',
    descripcion: 'módulos existentes en el sistema.',
  },
  
];