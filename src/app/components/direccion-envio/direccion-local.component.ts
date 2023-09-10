import { Component, EventEmitter, Output } from '@angular/core';
import {Direccion , Ciudades } from 'src/app/models/direccion';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Estados } from 'src/app/models/estados.enum';

@Component({
  selector: 'app-direccion-envio',
  templateUrl: './direccion-envio.component.html',
  styleUrls: ['./direccion-envio.component.css']
})
export class DireccionEnvioComponent {
  @Output() direccionEnvioCreada: EventEmitter<Direccion> = new EventEmitter<Direccion>();
  @Output() cambioEstado: EventEmitter<Estados> = new EventEmitter<Estados>();
  FormDireccionEnvioPedido: FormGroup; 

  constructor(
    private fb: FormBuilder) {
    this.FormDireccionEnvioPedido = this.fb.group({
      Calle: new FormControl('', [Validators.required, Validators.pattern('[A-Z, a-z]{4,50}')]),
      Numero: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{1,5}')]),
      Ciudad: new FormControl(true, [Validators.required]),
      Referencia: new FormControl('', [Validators.pattern('[A-Z, a-z, 0-9]{1,100}')])
    });
  }

  ItemCiudad = Ciudades;

  enviarFormulario() {
    const Calle = this.FormDireccionEnvioPedido.get('Calle')?.value;
    const Numero = this.FormDireccionEnvioPedido.get('Numero')?.value;
    const Ciudad = this.FormDireccionEnvioPedido.get('Ciudad')?.value;
    const Referencia = this.FormDireccionEnvioPedido.get('Referencia')?.value;
    const direccion:Direccion = {
      Calle,
      Numero,
      Ciudad,
      Referencia
    };
    this.direccionEnvioCreada.emit(direccion);
    this.cambioEstado.emit(Estados.Resumen);
  }  

  volverAlPedido(){
    this.cambioEstado.emit(Estados.Pedido);
  }
}
