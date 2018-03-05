import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutasModule } from './rutas/rutas.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './componentes/material/material.module';



@NgModule({
  declarations: [ //nuestros compoentes
    AppComponent
  ],
  imports: [// dependencias del modulo
    BrowserModule,RutasModule,
    BrowserAnimationsModule,
    MaterialModule  // para animaciones 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
