import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-solicitud',
  templateUrl: './consulta-solicitud.component.html',
  styleUrls: ['./consulta-solicitud.component.scss']
})
export class ConsultaSolicitudComponent {
  displayedColumns = ['requisito', 'archivo', 'aprobar', 'rechazar', 'motivo', 'archivoNuevo'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {}

  validarRequisitos() {
    this.router.navigateByUrl('dashboard/bandeja-validacion');
  }
}

export interface Requisitos {
  requisito: String;
  archivo: string;
  aprobar: string;
  rechazar: string;
  motivo: string;
  archivoNuevo: String;
}

const ELEMENT_DATA: Requisitos[] = [
  {requisito: 'Certificación vigente por dirección general de aeronáutica civil (DGAC)', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: ''},
  {requisito: 'Copia del permiso de operación vigente', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: 'archivoNuevo'},
  {requisito: 'Copia de las especificaciones de operación (OPSPECS)', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: ''},
  {requisito: 'Copia DNI de representante legal', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: 'archivoNuevo'},
  {requisito: 'Acta capacitación conectándonos', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: ''},
  {requisito: 'Certificación vigente por dirección general de aeronáutica civil (DGAC)', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: 'archivoNuevo'},
  {requisito: 'Copia del permiso de operación vigente', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: ''},
  {requisito: 'Copia de las especificaciones de operación (OPSPECS)', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: 'archivoNuevo'},
  {requisito: 'Copia DNI de representante legal', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: ''},
  {requisito: 'Acta capacitación conectándonos', archivo: 'Descargar', aprobar: 'a', rechazar: 'b', motivo: 'ejemplo', archivoNuevo: 'archivoNuevo'},
];