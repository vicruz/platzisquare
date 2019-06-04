import {Injectable} from "@angular/core";
//import { AngularFireDatabase } from "angularfire2/database/database";
import { AngularFireDatabase } from 'angularfire2/database'
/*import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';*/

@Injectable()
export class LugaresService{
  lugares:any = [
	  {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: '1er negocio'},
	  {id: 2, plan: 'gratuito', cercania: 2, distancia: 5, active: false, nombre: '2do negocio'},
	  {id: 3, plan: 'gratuito', cercania: 3, distancia: 10, active: true, nombre: '3er negocio'}
  ];

  constructor(private afDB:AngularFireDatabase){
  //constructor(private afDB:AngularFireDatabaseModule){

  }

  public getLugares(){
    return this.lugares;
  }

  public buscarLugar(id){
    return this.lugares.filter((lugar)=>{ return lugar.id == id})[0] || null;
  }

  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/1').set(lugar);
  }
}
