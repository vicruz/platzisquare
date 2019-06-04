import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective} from './directives/resaltar.directive';
import { ContarClickDirective} from './directives/contar-clics.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from "./detalle/detalle.component"
import { LugaresComponent } from "./lugares/lugares.component"
import { ContactoComponent } from "./contacto/contacto.component"
import { LugaresService } from "./services/lugares.service"
import { CrearComponent } from "./crear/crear.component"

/*
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
*/
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';


import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear', component: CrearComponent}
];

export const firebaseConfig = {
  apiKey: "XXXXXXX",
    authDomain: "XXXXXX",
    databaseURL: "http://url.com",
    projectId: "myproject",
    storageBucket: "XXX",
    messagingSenderId: "00000",
    appId: "xxxxxxxxx"
};

@NgModule({
  declarations: [
    AppComponent,
	  ResaltarDirective,
	  ContarClickDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
	  AgmCoreModule.forRoot({
      apiKey: 'XXXXXXXX'
    }),
    RouterModule.forRoot(appRoutes),
    /*AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,*/
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [LugaresService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
