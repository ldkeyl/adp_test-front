import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-requisitos',
  templateUrl: './ingreso-requisitos.component.html',
  styleUrls: ['./ingreso-requisitos.component.scss']
})
export class IngresoRequisitosComponent {
  displayedColumns = ['requisito', 'archivo'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {}

  Guardar() {
    // this.router.navigateByUrl('/auth/cambiar-contraseña-primera-vez');
  }
  consultaSolicitud() {
    this.router.navigateByUrl('dashboard/consulta-solicitud');
  }
}


export interface Requisitos {
  requisito: String;
  archivo: string;
}

const ELEMENT_DATA: Requisitos[] = [
  {requisito: 'Certificación vigente por dirección general de aeronáutica civil (DGAC)', archivo: 'TALMA Vigencia DGAC DDMMYYYY hhmmss'},
  {requisito: 'Copia del permiso de operación vigente', archivo: 'TALMA Permiso DDMMYYYY hhmmss'},
  {requisito: 'Copia de las especificaciones de operación (OPSPECS)', archivo: '123'},
  {requisito: 'Copia DNI de representante legal', archivo: '123'},
  {requisito: 'Acta capacitación conectándonos', archivo: '123'},
    {requisito: 'Certificación vigente por dirección general de aeronáutica civil (DGAC)', archivo: 'TALMA Vigencia DGAC DDMMYYYY hhmmss'},
  {requisito: 'Copia del permiso de operación vigente', archivo: 'TALMA Permiso DDMMYYYY hhmmss'},
  {requisito: 'Copia de las especificaciones de operación (OPSPECS)', archivo: '123'},
  {requisito: 'Copia DNI de representante legal', archivo: '123'},
  {requisito: 'Acta capacitación conectándonos', archivo: '123'},
];