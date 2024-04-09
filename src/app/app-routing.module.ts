import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarTiketComponent } from './staff/buscar-tiket/buscar-tiket.component';
import { DatosTiketComponent } from './staff/datos-tiket/datos-tiket.component';
import { RutaNoEncontradaComponent } from './error/ruta-no-encontrada/ruta-no-encontrada.component';

const routes: Routes = [
  {
    path: 'buscar-tiket',
    component: BuscarTiketComponent
  },
  {
    path:'',
    redirectTo:'/buscar-tiket',
    pathMatch:'full'
  },
  {
    path: 'datos-tiket/:tiket',
    component: DatosTiketComponent
  },
  // RUTA NO ENCONTRADA TIENE QUE SER EL ULTIMO
  {
    path:'**',
    component: RutaNoEncontradaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
