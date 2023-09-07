import { Component } from '@angular/core';
import {Direccion , Ciudades } from 'src/app/models/direccion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direccion-local',
  templateUrl: './direccion-local.component.html',
  styleUrls: ['./direccion-local.component.css']
})
export class DireccionLocalComponent {

  constructor(private router: Router) {}

  ItemCiudad = Ciudades;

  siguiente(){
    this.router.navigate(['/resumen']);
  }

  atras(){
    this.router.navigate(['/']);
  }

}
