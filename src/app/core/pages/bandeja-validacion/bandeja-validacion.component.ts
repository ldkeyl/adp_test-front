import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandeja-validacion',
  templateUrl: './bandeja-validacion.component.html',
  styleUrls: ['./bandeja-validacion.component.scss'],
})
export class BandejaValidacionComponent {
  displayedColumns = ['empresa', 'fechaSolicitud', 'estado', 'validar'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) {}

  validarRequisitos() {
    this.router.navigateByUrl('dashboard/validacion-requisitos');
  }
}
export interface Requisitos {
  empresa: String;
  fechaSolicitud: string;
  estado: string;
  validar: string;
}


const ELEMENT_DATA: Requisitos[] = [
  {empresa: 'ITTEAM', fechaSolicitud: '01 / 07 / 2023', estado: 'Aprobado', validar: 'validar'},
  {empresa: 'TALMA SA.', fechaSolicitud: '01 / 08 / 2023', estado: 'Pendiente', validar: 'validar'},
  {empresa: 'ADP', fechaSolicitud: '01 / 09 / 2023', estado: 'Rechazado', validar: 'validar'},
  {empresa: 'LATAM', fechaSolicitud: '01 / 10 / 2023', estado: 'Aprobado', validar: 'validar'},
  {empresa: 'SKY AIRLINE', fechaSolicitud: '01 / 11 / 2023', estado: 'Pendiente', validar: 'validar'},
  {empresa: 'ADP', fechaSolicitud: '01 / 09 / 2023', estado: 'Rechazado', validar: 'validar'},
  {empresa: 'LATAM', fechaSolicitud: '01 / 10 / 2023', estado: 'Aprobado', validar: 'validar'},
  {empresa: 'SKY AIRLINE', fechaSolicitud: '01 / 11 / 2023', estado: 'Pendiente', validar: 'validar'},
  {empresa: 'ADP', fechaSolicitud: '01 / 09 / 2023', estado: 'Rechazado', validar: 'validar'},
  {empresa: 'LATAM', fechaSolicitud: '01 / 10 / 2023', estado: 'Aprobado', validar: 'validar'},
  {empresa: 'SKY AIRLINE', fechaSolicitud: '01 / 11 / 2023', estado: 'Pendiente', validar: 'validar'},
];
