import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-tiket',
  templateUrl: './buscar-tiket.component.html',
  styleUrl: './buscar-tiket.component.css'
})
export class BuscarTiketComponent {

  fGroup2: FormGroup= new FormGroup({});




  constructor(
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
    private router: Router,

  ) {}
  ngOnInit() {
    //construir formulario
    this.ConstriurFormularioregister();

  }

  enviarTiket() {
    if (this.fGroup2.valid) {
      //enviar formulario
      //console.log(this.fGroup2.value);
      let tiket = this.fGroup2.value.tiket;
      //alert('Tiket enviado: ' + tiket);
      this.router.navigate(['/datos-tiket/'+ tiket]);
    } else {
      alert('Formulario invalido');
    }


  }


  //formulario register
  ConstriurFormularioregister() {
    this.fGroup2 = this.fb.group({
      tiket: ['',[Validators.required,]],

    });
  }

  //funcion que me permite obtener los controles del formulario
  get obtenerFormGroup2(){
    return this.fGroup2.controls;
  }



}
