import { Component } from '@angular/core';

@Component({
  selector: 'app-zona-accesos',
  templateUrl: './zona-accesos.component.html',
  styleUrls: ['./zona-accesos.component.scss']
})
export class ZonaAccesosComponent {
  displayedColumns = ['codigo', 'nombre', 'descripcion', 'seleccione'];
  dataSource = ELEMENT_DATA;
}

export interface ZonasAccesos {
  codigo: String;
  nombre: String;
  descripcion: String;
  seleccione: String; 
}

const ELEMENT_DATA: ZonasAccesos[] = [
  {codigo: 'ZN0001', nombre: 'Zonas administrativas', descripcion: 'Zonas administrativas', seleccione: 'x'},
  {codigo: 'ZN0002', nombre: 'Sala de Embarque', descripcion: 'Sala de Embarque', seleccione: 'x'},
  {codigo: 'ZN0003', nombre: 'Sala de Llegada de Pasajeros', descripcion: 'Sala de Llegada de Pasajeros', seleccione: 'x'},
  {codigo: 'ZN0004', nombre: 'Plataforma', descripcion: 'Plataforma', seleccione: 'x'},
  {codigo: 'ZN0005', nombre: 'Taller Aeronáutico', descripcion: 'Taller Aeronáutico', seleccione: 'x'},
];

