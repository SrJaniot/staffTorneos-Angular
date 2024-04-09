import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiketService } from '../../servicios/tiket.service';
import { RespuestaServertiket } from '../../modelos/RespuestaServidorTiket.model copy';
import { RespuestaServer } from '../../modelos/RespuestaServidor.model';
import { WhatsappService } from '../../servicios/whatsapp.service';

@Component({
  selector: 'app-datos-tiket',
  templateUrl: './datos-tiket.component.html',
  styleUrl: './datos-tiket.component.css'
})
export class DatosTiketComponent {
  //variables para almacenar los datos del tiket
  nombre: string = '';
  edad: number = 0;
  correo: string = '';
  tipo_documento: string = '';
  numero_documento: string = '';
  celular: string = '';


  constructor(
    private route: ActivatedRoute,
    private tiketService: TiketService,
    private router: Router,
    private whatsappService: WhatsappService,
  ) {}
  ngOnInit() {
    //capturamos el parametro de la url
    let tiket = this.route.snapshot.params['tiket'];
    //llamamos al servicio para obtener los datos del tiket
    let datos = this.tiketService.obtenerDatosTiket(tiket).subscribe(
      (response: RespuestaServertiket) => {
        console.log(response);


        if (response.CODIGO == 200) {
          console.log(response.DATOS);
          //capturamos los datos del tiket
          this.capturarDatosTiket(response);
          //console.log(this.celular);
        } else {
          alert(response.MENSAJE);
          this.router.navigate(['/buscar-tiket']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //capturar datos del tiket parametros: respuesta del servicio
  capturarDatosTiket(datos: RespuestaServertiket) {
    this.nombre = datos.DATOS?.nombre_jugador || '';
    this.edad = datos.DATOS?.edad_jugador || 0;
    this.correo = datos.DATOS?.correo_jugador || '';
    this.tipo_documento = datos.DATOS?.tipo_documento || '';
    this.numero_documento = datos.DATOS?.num_documento || '';
    this.celular = datos.DATOS?.tel_jugador || '';
  }

  //funcion que permite actualizar la asistencia del tiket
  actualizarAsistencia() {
    let tiket = this.route.snapshot.params['tiket'];
    //llamamos al servicio para actualizar la asistencia
    let datos = this.tiketService.PermitirTiketEvento(tiket).subscribe(
      (response: RespuestaServer) => {
        console.log(response);
        if (response.CODIGO == 200) {
          alert(response.MENSAJE);
          //enviar mensaje por whatsapp
          let celularcolombia = '57' + this.celular;
          let mensaje = 'Hola ' + this.nombre + ' tu asistencia ha sido registrada con exito ';
          this.whatsappService.EnviarMensajeWhatsapp(celularcolombia, mensaje).subscribe({
            next: (respuesta:any) => {
               console.log(respuesta);
               console.log('mensaje enviado');
               alert('Mensaje enviado');
             }
           });
          this.router.navigate(['/buscar-tiket']);
        } else {
          alert(response.MENSAJE);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //funcion que permite regresar a la pantalla de busqueda de tiket
  regresar() {
    this.router.navigate(['/buscar-tiket']);
  }

}
