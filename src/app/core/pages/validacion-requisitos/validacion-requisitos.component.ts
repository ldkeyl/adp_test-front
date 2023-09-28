import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validacion-requisitos',
  templateUrl: './validacion-requisitos.component.html',
  styleUrls: ['./validacion-requisitos.component.scss']
})
export class ValidacionRequisitosComponent {
  displayedColumns = ['requisito', 'archivo', 'aprobar', 'rechazar', 'motivo'];
  dataSource = ELEMENT_DATA;

  checked = false;
  constructor(private router: Router) {}

  requisitos() {
    this.router.navigateByUrl('dashboard/gestion-usuario');
  }
}

export interface Requisitos {
  requisito: String;
  archivo: string;
  aprobar: string;
  rechazar: string;
  motivo: string;
}

const ELEMENT_DATA: Requisitos[] = [
  {requisito: 'Certificación vigente por dirección general de aeronáutica civil (DGAC)', archivo: 'TALMA Vigencia DGAC DDMMYYYY hhmmss', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
  {requisito: 'Copia del permiso de operación vigente', archivo: 'TALMA Permiso DDMMYYYY hhmmss', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
  {requisito: 'Copia de las especificaciones de operación (OPSPECS)', archivo: '123', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
  {requisito: 'Copia DNI de representante legal', archivo: '123', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
  {requisito: 'Acta capacitación conectándonos', archivo: '123', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
  {requisito: 'Certificación vigente por dirección general de aeronáutica civil (DGAC)', archivo: 'TALMA Vigencia DGAC DDMMYYYY hhmmss', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
  {requisito: 'Copia del permiso de operación vigente', archivo: 'TALMA Permiso DDMMYYYY hhmmss', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
  {requisito: 'Copia de las especificaciones de operación (OPSPECS)', archivo: '123', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
  {requisito: 'Copia DNI de representante legal', archivo: '123', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
  {requisito: 'Acta capacitación conectándonos', archivo: '123', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo'},
];