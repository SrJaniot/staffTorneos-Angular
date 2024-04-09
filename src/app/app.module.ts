import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarTiketComponent } from './staff/buscar-tiket/buscar-tiket.component';
import { DatosTiketComponent } from './staff/datos-tiket/datos-tiket.component';
import { RutaNoEncontradaComponent } from './error/ruta-no-encontrada/ruta-no-encontrada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BuscarTiketComponent,
    DatosTiketComponent,
    RutaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
