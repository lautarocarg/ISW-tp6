import { Component } from '@angular/core';
import {Direccion , Ciudades } from 'src/app/models/direccion';

@Component({
  selector: 'app-direccion-local',
  templateUrl: './direccion-local.component.html',
  styleUrls: ['./direccion-local.component.css']
})
export class DireccionLocalComponent {

  ItemCiudad = Ciudades;

}
