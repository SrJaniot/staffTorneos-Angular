import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private url_notificaciones_whatsapp : string = 'http://127.0.0.1:3001/';

  constructor(
    private http: HttpClient,

  ) { }

  EnviarMensajeWhatsapp(numeroDestino: string, mensaje: string): any {
    return this.http.post(this.url_notificaciones_whatsapp+'lead', {
      mensaje: mensaje,
      phone: numeroDestino
    });
  }
}
