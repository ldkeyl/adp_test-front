import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-solicitud-pases',
  templateUrl: './consulta-solicitud-pases.component.html',
  styleUrls: ['./consulta-solicitud-pases.component.scss']
})
export class ConsultaSolicitudPasesComponent {
  displayedColumns = ['nroSolicitud', 'tipoIdentificacion', 'empresa', 'fechaSolicitud', 'estado', 'ver', 'verDocumento'];
  dataSource = ELEMENT_DATA;

}


export interface ConsultaSolicitudIdentificacion {
  nroSolicitud: Number;
  tipoIdentificacion: String;
  empresa: String;
  fechaSolicitud: String;
  estado: String;
  ver: String; 
  verDocumento: String;
}

const ELEMENT_DATA: ConsultaSolicitudIdentificacion[] = [
  {nroSolicitud: 10, tipoIdentificacion: 'Permanente', empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', estado: 'Pendiente', ver: '-', verDocumento: '-'},
  {nroSolicitud: 9, tipoIdentificacion: 'Permanente', empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', estado: 'Pendiente', ver: '-', verDocumento: '-'},
  {nroSolicitud: 8, tipoIdentificacion: 'Permanente', empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', estado: 'Enviado', ver: '-', verDocumento: '-'},
  {nroSolicitud: 7, tipoIdentificacion: 'Permanente', empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', estado: 'Enviado', ver: '-', verDocumento: '-'},
  {nroSolicitud: 6, tipoIdentificacion: 'Permanente', empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', estado: 'Aprobado', ver: '-', verDocumento: '-'},
  {nroSolicitud: 5, tipoIdentificacion: 'Permanente', empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', estado: 'Aprobado', ver: '-', verDocumento: '-'},

];