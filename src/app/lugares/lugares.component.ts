import { Component } from '@angular/core';
import { LugaresService } from "../services/lugares.service";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'PlatziSquare';

	lat:number = 24.7407513;
	lng:number = -107.3933932;

  lugares = null;
  constructor(private lugaresService: LugaresService){
    this.lugares = lugaresService.getLugares();
	}
}
