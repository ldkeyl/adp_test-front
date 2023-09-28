import { Component } from '@angular/core';

@Component({
  selector: 'app-adjunte-requisitos-vehicular',
  templateUrl: './adjunte-requisitos-vehicular.component.html',
  styleUrls: ['./adjunte-requisitos-vehicular.component.scss']
})
export class AdjunteRequisitosVehicularComponent {
  displayedColumns = ['requisitos', 'archivo'];
  dataSource = ELEMENT_DATA;
}

export interface RequisitosVehicular {
  requisitos: String;
  archivo: String;
}
const ELEMENT_DATA: RequisitosVehicular[] = [
  {requisitos: 'Copia de la tarjeta de propiedad vehicular.', archivo: '-'},
  {requisitos: 'Copia de la póliza de aviación.', archivo: '-'},
  {requisitos: 'Copia de la revisión técnica vehicular vigente.', archivo: '-'},
  {requisitos: 'Copia simple de SOAT vehicular.', archivo: '-'},
  {requisitos: 'Copia de la licencia de conducir del conductor autorizado del vehículo.', archivo: '-'},
];

