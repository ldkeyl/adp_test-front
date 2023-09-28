import { Component } from '@angular/core';

@Component({
  selector: 'app-renovar-vigencia-provisional',
  templateUrl: './renovar-vigencia-provisional.component.html',
  styleUrls: ['./renovar-vigencia-provisional.component.scss']
})
export class RenovarVigenciaProvisionalComponent {

  displayedColumns = ['nroSolicitud', 'empresa', 'fechaSolicitud', 'fechaVencimiento', 'estado', 'cartaRenovacion'];
  dataSource = ELEMENT_DATA;


}


export interface PaseProvicional {
  nroSolicitud: Number;
  empresa: String;
  fechaSolicitud: String;
  fechaVencimiento: String; 
  estado: String;
  cartaRenovacion: String;
}

const ELEMENT_DATA: PaseProvicional[] = [
  {nroSolicitud: 10, empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', fechaVencimiento: '01/07/2025', estado: 'Vencido', cartaRenovacion: 'subirArchivo'},
  {nroSolicitud: 9, empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', fechaVencimiento: '01/07/2025', estado: 'Vencido', cartaRenovacion: 'subirArchivo'},
  {nroSolicitud: 8, empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', fechaVencimiento: '01/07/2025', estado: 'Vencido', cartaRenovacion: 'subirArchivo'},
  {nroSolicitud: 7, empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', fechaVencimiento: '01/07/2025', estado: 'Vencido', cartaRenovacion: 'subirArchivo'},
  {nroSolicitud: 6, empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', fechaVencimiento: '01/07/2025', estado: 'Por Vencer', cartaRenovacion: 'subirArchivo'},
  {nroSolicitud: 5, empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', fechaVencimiento: '01/07/2025', estado: 'Por Vencer', cartaRenovacion: 'subirArchivo'},
  {nroSolicitud: 4, empresa: 'TALMA SA', fechaSolicitud: '01/14/2023', fechaVencimiento: '01/07/2025', estado: 'Por Vencer', cartaRenovacion: 'subirArchivo'},

];
