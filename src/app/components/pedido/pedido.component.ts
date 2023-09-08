import { Component } from '@angular/core';
import {Direccion , Ciudades } from 'src/app/models/direccion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  constructor(private router: Router) {}

  ItemCiudad = Ciudades;

}
