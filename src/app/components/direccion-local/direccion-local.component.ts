import { Component, OnInit } from '@angular/core';
import {Direccion , Ciudades } from 'src/app/models/direccion';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direccion-local',
  templateUrl: './direccion-local.component.html',
  styleUrls: ['./direccion-local.component.css']
})
export class DireccionLocalComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ItemCiudad = Ciudades;
  datosFormulario: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['datos']) {
        this.datosFormulario = JSON.parse(params['datos']);
      }
    });
  }

  siguiente(){
    this.router.navigate(['/resumen']);
  }

  atras(){
    this.router.navigate(['/']);
  }

  FormDireccionEnvioPedido = new FormGroup({
    Calle: new FormControl('',
      [Validators.required,
        Validators.pattern('[A-Z, a-z]{4,50}')]),
    Numero: new FormControl(null,
      [Validators.required,
       Validators.pattern('[0-9]{1,5}')]),
    Ciudad: new FormControl(true, [Validators.required]),
    Referencia: new FormControl('', [Validators.pattern('[A-Z, a-z, 0-9]{1,100}')])
  })

}
