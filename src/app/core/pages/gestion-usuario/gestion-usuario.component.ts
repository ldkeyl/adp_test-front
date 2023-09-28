import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.scss']
})
export class GestionUsuarioComponent {

  displayedColumns = ['nombres', 'apellidos', 'tipo_de_doc', 'nro_documento','empresa','email','direccion','referencia','celular','estado','roles'];
  dataSource = ELEMENT_DATA;
}
export interface Requisitos {
  nombres: String;
  apellidos: string;
  tipo_de_doc: string;
  nro_documento: string;
  empresa: string;
  email: string;
  direccion: string;
  referencia: string;
  celular: string;
  estado: string;
  roles: string;
}


const ELEMENT_DATA: Requisitos[] = [
  {
    nombres: 'José',
    apellidos: 'Miguel Arrollo',
    tipo_de_doc: 'DNI',
    nro_documento: '47025412',
    empresa: 'Prosegur',
    email:'miguel@latam.com',
    direccion:'Jr. Lima',
    referencia: 'Botica',
    celular: '965874123',
    estado: 'Activo',
    roles:'Ver'
  },
  {
    nombres: 'José',
    apellidos: 'Miguel Arrollo',
    tipo_de_doc: 'DNI',
    nro_documento: '47025412',
    empresa: 'Prosegur',
    email:'miguel@latam.com',
    direccion:'Jr. Lima',
    referencia: 'Botica',
    celular: '965874123',
    estado: 'Activo',
    roles:'Ver'
  },
  {
    nombres: 'José',
    apellidos: 'Miguel Arrollo',
    tipo_de_doc: 'DNI',
    nro_documento: '47025412',
    empresa: 'Prosegur',
    email:'miguel@latam.com',
    direccion:'Jr. Lima',
    referencia: 'Botica',
    celular: '965874123',
    estado: 'Activo',
    roles:'Ver'
  },
  {
    nombres: 'José',
    apellidos: 'Miguel Arrollo',
    tipo_de_doc: 'DNI',
    nro_documento: '47025412',
    empresa: 'Prosegur',
    email:'miguel@latam.com',
    direccion:'Jr. Lima',
    referencia: 'Botica',
    celular: '965874123',
    estado: 'Activo',
    roles:'Ver'
  },
  {
    nombres: 'José',
    apellidos: 'Miguel Arrollo',
    tipo_de_doc: 'DNI',
    nro_documento: '47025412',
    empresa: 'Prosegur',
    email:'miguel@latam.com',
    direccion:'Jr. Lima',
    referencia: 'Botica',
    celular: '965874123',
    estado: 'Activo',
    roles:'Ver'
  },
  {
    nombres: 'José',
    apellidos: 'Miguel Arrollo',
    tipo_de_doc: 'DNI',
    nro_documento: '47025412',
    empresa: 'Prosegur',
    email:'miguel@latam.com',
    direccion:'Jr. Lima',
    referencia: 'Botica',
    celular: '965874123',
    estado: 'Activo',
    roles:'Ver'
  },
  {
    nombres: 'José',
    apellidos: 'Miguel Arrollo',
    tipo_de_doc: 'DNI',
    nro_documento: '47025412',
    empresa: 'Prosegur',
    email:'miguel@latam.com',
    direccion:'Jr. Lima',
    referencia: 'Botica',
    celular: '965874123',
    estado: 'Activo',
    roles:'Ver'
  },
  {
    nombres: 'José',
    apellidos: 'Miguel Arrollo',
    tipo_de_doc: 'DNI',
    nro_documento: '47025412',
    empresa: 'Prosegur',
    email:'miguel@latam.com',
    direccion:'Jr. Lima',
    referencia: 'Botica',
    celular: '965874123',
    estado: 'Activo',
    roles:'Ver'
  },
  {
    nombres: 'José',
    apellidos: 'Miguel Arrollo',
    tipo_de_doc: 'DNI',
    nro_documento: '47025412',
    empresa: 'Prosegur',
    email:'miguel@latam.com',
    direccion:'Jr. Lima',
    referencia: 'Botica',
    celular: '965874123',
    estado: 'Activo',
    roles:'Ver'
  },
  
];