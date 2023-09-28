import { Component } from '@angular/core';

@Component({
  selector: 'app-herramientas-articulos',
  templateUrl: './herramientas-articulos.component.html',
  styleUrls: ['./herramientas-articulos.component.scss']
})
export class HerramientasArticulosComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


}

interface Food {
  value: string;
  viewValue: string;
}
