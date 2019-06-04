import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
	  {plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: '1er negocio'},
	  {plan: 'gratuito', cercania: 2, distancia: 5, active: false, nombre: '2do negocio'},
	  {plan: 'gratuito', cercania: 3, distancia: 10, active: true, nombre: '3er negocio'}
  ];
  personas:any =[
	{nombre: 'Victor Cruz', edad: 35},
	{nombre: 'xxx eee', edad: 17},
	{nombre: 'sdas rfe', edad: 18},
	{nombre: 'adcasd oij', edad: 20},
	{nombre: 'asd ad', edad: 3},
	{nombre: 'assad pokb', edad: 4},
  ];
	lat:number = 24.7407513;
	lng:number = -107.3933932;
	constructor(){
	}
}
