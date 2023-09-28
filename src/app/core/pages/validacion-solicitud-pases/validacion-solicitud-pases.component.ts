import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion-solicitud-pases',
  templateUrl: './validacion-solicitud-pases.component.html',
  styleUrls: ['./validacion-solicitud-pases.component.scss']
})
export class ValidacionSolicitudPasesComponent {
  displayedColumns = ['nroSolicitud', 'tipoId', 'ruc', 'empresa', 'fechaSolicitud', 'estado', 'validarIds', 'validadorAeropuerto', 'validadorSedeCentral', 'emisorIds'];
  dataSource = ELEMENT_DATA;

}


export interface Requisitos {
  nroSolicitud: Number;
  tipoId: String;
  ruc: Number;
  empresa: String;
  fechaSolicitud: string;
  estado: string;
  validarIds: string;
  validadorAeropuerto: string;
  validadorSedeCentral: string;
  emisorIds: string;
}


const ELEMENT_DATA: Requisitos[] = [
  {nroSolicitud: 10, tipoId: 'Permanente', ruc: 20204621242, empresa: 'ITTEAM', fechaSolicitud: '01 / 07 / 2023', estado: 'Pendiente', validarIds: 'validar', validadorAeropuerto: '-', validadorSedeCentral: '-', emisorIds: '-'},
  {nroSolicitud: 10, tipoId: 'Permanente', ruc: 20204621242, empresa: 'ITTEAM', fechaSolicitud: '01 / 07 / 2023', estado: 'Pendiente', validarIds: 'validar', validadorAeropuerto: '-', validadorSedeCentral: '-', emisorIds: '-'},
  {nroSolicitud: 10, tipoId: 'Permanente', ruc: 20204621242, empresa: 'ITTEAM', fechaSolicitud: '01 / 07 / 2023', estado: 'Pendiente', validarIds: 'validar', validadorAeropuerto: '-', validadorSedeCentral: '-', emisorIds: '-'},
  {nroSolicitud: 10, tipoId: 'Permanente', ruc: 20204621242, empresa: 'ITTEAM', fechaSolicitud: '01 / 07 / 2023', estado: 'Pendiente', validarIds: 'validar', validadorAeropuerto: '-', validadorSedeCentral: '-', emisorIds: '-'},
  {nroSolicitud: 10, tipoId: 'Permanente', ruc: 20204621242, empresa: 'ITTEAM', fechaSolicitud: '01 / 07 / 2023', estado: 'Rechazado', validarIds: 'validar', validadorAeropuerto: '-', validadorSedeCentral: '-', emisorIds: '-'},
  {nroSolicitud: 10, tipoId: 'Permanente', ruc: 20204621242, empresa: 'ITTEAM', fechaSolicitud: '01 / 07 / 2023', estado: 'Rechazado', validarIds: 'validar', validadorAeropuerto: '-', validadorSedeCentral: '-', emisorIds: '-'},
  {nroSolicitud: 10, tipoId: 'Permanente', ruc: 20204621242, empresa: 'ITTEAM', fechaSolicitud: '01 / 07 / 2023', estado: 'Rechazado', validarIds: 'validar', validadorAeropuerto: '-', validadorSedeCentral: '-', emisorIds: '-'},
  {nroSolicitud: 10, tipoId: 'Permanente', ruc: 20204621242, empresa: 'ITTEAM', fechaSolicitud: '01 / 07 / 2023', estado: 'Rechazado', validarIds: 'validar', validadorAeropuerto: '-', validadorSedeCentral: '-', emisorIds: '-'},

];