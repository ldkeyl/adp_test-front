import { Component } from '@angular/core';

@Component({
  selector: 'app-pase-provisional',
  templateUrl: './pase-provisional.component.html',
  styleUrls: ['./pase-provisional.component.scss']
})
export class PaseProvisionalComponent {

  panelOpenState = true;
  displayedColumns2 = ['requisitos', 'archivo'];
  displayedColumns3 = ['requisitos', 'archivo'];
  displayedColumnsP = ['tipo', 'motivo', 'nombreCompleto', 'tipoDocumento', 'nroDocumento', 'descartar'];
  displayedColumnsV = ['tipo', 'placaVehiculo', 'tipoVehiculo', 'nroSerie', 'descartar'];
  displayedColumnsH = ['tipo', 'nombre', 'modelo', 'serie', 'cantidad', 'descartar'];
  displayedColumnsPR = ['tipo', 'total'];

  dataSource2 = REQ_HERRAMIENTAS_DATA;
  dataSource3 = REQ_PERSONAL_DATA;
  dataSourceP = PERSONAL_DATA;
  dataSourceV = VEHICULAR_DATA;
  dataSourceH = HERRAMIENTAS_DATA;
  dataSourcePR = PASES_REQUERIDOS_DATA;
}

export interface RequisitosHerramientas {
  requisitos: String;
  archivo: String;
} 

export interface RequisitosPersonales {
  requisitos: String;
  archivo: String;
} 

export interface Personal {
  tipo: String;
  motivo: String;
  nombreCompleto: String;
  tipoDocumento: String;
  nroDocumento: String;
  descartar: String;
}

export interface Vehicular {
  tipo: String;
  placaVehiculo: String;
  tipoVehiculo: String;
  nroSerie: String;
  descartar: String;
}

export interface HerramientasArticulos {
  tipo: String;
  nombre: String;
  modelo: String;
  serie: String;
  cantidad: String;
  descartar: String;
}

export interface PasesRequeridos {
  tipo: String;
  total: number;
}

const PASES_REQUERIDOS_DATA: PasesRequeridos[] = [
  {tipo: 'Personal', total: 0},
  {tipo: 'Vehicular', total: 0},
  {tipo: 'Herramientas/Artículos Prohibidos', total: 0},
];

const PERSONAL_DATA: Personal[] = [
  {tipo: 'Personal', motivo: 'Nuevo', nombreCompleto: 'Paola Torres', tipoDocumento: 'DNI', nroDocumento: '47025412', descartar: 'TRASH'},
  {tipo: 'Personal', motivo: 'Nuevo', nombreCompleto: 'Paola Torres', tipoDocumento: 'DNI', nroDocumento: '47025412', descartar: 'TRASH'},
  {tipo: 'Personal', motivo: 'Nuevo', nombreCompleto: 'Paola Torres', tipoDocumento: 'DNI', nroDocumento: '47025412', descartar: 'TRASH'},
  {tipo: 'Personal', motivo: 'Nuevo', nombreCompleto: 'Paola Torres', tipoDocumento: 'DNI', nroDocumento: '47025412', descartar: 'TRASH'},
  {tipo: 'Personal', motivo: 'Nuevo', nombreCompleto: 'Paola Torres', tipoDocumento: 'DNI', nroDocumento: '47025412', descartar: 'TRASH'},

];

const VEHICULAR_DATA: Vehicular[] = [
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},
  {tipo: 'Vehicular', placaVehiculo: 'ABC-123', tipoVehiculo: 'Camioneta', nroSerie: 'ABCDEF12345', descartar: 'TRASH'},

];

const HERRAMIENTAS_DATA: HerramientasArticulos[] = [
  {tipo: 'Herramientas/Artículo', nombre: 'Andamio', modelo: 'Dato Modelo', serie: '123CBA', cantidad: '1', descartar: 'TRASH'},
  {tipo: 'Herramientas/Artículo', nombre: 'Andamio', modelo: 'Dato Modelo', serie: '123CBA', cantidad: '1', descartar: 'TRASH'},
  {tipo: 'Herramientas/Artículo', nombre: 'Andamio', modelo: 'Dato Modelo', serie: '123CBA', cantidad: '1', descartar: 'TRASH'},
];

const REQ_HERRAMIENTAS_DATA: RequisitosHerramientas[] = [
  {requisitos: 'Solicitud de facilidades provisionales de Artículos Prohibidos/Herramientas', archivo: 'archivo'},
];

const REQ_PERSONAL_DATA: RequisitosPersonales[] = [
  {requisitos: 'Si es contratista/proveedor documento de autorización emitida por el Validador SST.', archivo: 'archivo'},
];