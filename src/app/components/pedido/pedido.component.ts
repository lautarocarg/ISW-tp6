import { Component } from '@angular/core';
import {Direccion , Ciudades } from 'src/app/models/direccion';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  constructor(private router: Router) {}

  ItemCiudad = Ciudades;

  FormPedido = new FormGroup({
    Productos: new FormControl('',[
      Validators.required
    ])
  });

  FormDireccionLocal = new FormGroup({
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
