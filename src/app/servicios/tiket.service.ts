import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaServertiket } from '../modelos/RespuestaServidorTiket.model copy';
import { RespuestaServer } from '../modelos/RespuestaServidor.model';

@Injectable({
  providedIn: 'root'
})
export class TiketService {

  constructor(
    private http: HttpClient,

  ) { }

  //metodo post para obtener los datos del tiket
  obtenerDatosTiket(barcode: string): Observable<RespuestaServertiket> {
    return this.http.post('http://127.0.0.1:3001/ObtenerDatosUsuarioTiketBarcode',{
     barcode : barcode,
    });
  }
    //metodo post para actualizar asistencia los datos del tiket
    PermitirTiketEvento(barcode: string): Observable<RespuestaServer> {
      return this.http.post('http://127.0.0.1:3001/ActualizarAsistenciaTiketBarcode',{
       barcode : barcode,
      });
    }

}
