import { Component, EventEmitter, ViewChild, Output } from '@angular/core';
import { Direccion , Ciudades } from 'src/app/models/direccion';
import { Pedido } from 'src/app/models/pedido';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { PedidoYDireccion } from 'src/app/models/pedidoYDireccion';
import { Estados } from 'src/app/models/estados.enum';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  @Output() pedidoCreado: EventEmitter<PedidoYDireccion> = new EventEmitter<PedidoYDireccion>();
  @Output() cambioEstado: EventEmitter<Estados> = new EventEmitter<Estados>();
  @ViewChild(ImageUploadComponent) componenteHijo: ImageUploadComponent | undefined;
  FormPedido: FormGroup;
  FormDireccionLocal: FormGroup; 

  constructor(
    private fb: FormBuilder
    ) {
      this.FormPedido = this.fb.group({
    });

    this.FormDireccionLocal = this.fb.group({
      Calle: new FormControl('', [Validators.required, Validators.pattern('[A-Z, a-z]{4,50}')]),
      Numero: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{1,5}')]),
      Ciudad: new FormControl(true, [Validators.required]),
      Referencia: new FormControl('', [Validators.pattern('[A-Z, a-z, 0-9]{1,100}')])
    });
  }

  descripcion: string = '';
  flagTablaPedidos: boolean = true;
  ItemCiudad = Ciudades;
  Pedidos: Pedido[] = [];
  datosFormulario: any;
  imagenes: string[] = [];

  agregarPedido() {
    let descripcionTextArea = document.getElementById('descripcionPedido');
    let descripcionTextAreaHTML = descripcionTextArea as HTMLTextAreaElement;
    this.descripcion = descripcionTextAreaHTML.value;
    if(this.descripcion.trim() != ''){
      let nuevoPedido: Pedido = new Pedido();
      nuevoPedido.Descripcion = this.descripcion;
      nuevoPedido.Imagenes = this.imagenes,
      this.Pedidos.push(nuevoPedido);
      nuevoPedido = new Pedido();
      this.flagTablaPedidos = false;
      this.actualizarImagenesCargadas();
    }
    this.imagenes = []
  }
  actualizarImagenesCargadas() {
    if (this.componenteHijo) {
      this.componenteHijo.uploadedFileNames = [];
      this.componenteHijo.archivosSubidos = false;
    }
  }

  enviarFormulario() {
    const Calle = this.FormDireccionLocal.get('Calle')?.value;
    const Numero = this.FormDireccionLocal.get('Numero')?.value;
    const Ciudad = this.FormDireccionLocal.get('Ciudad')?.value;
    const Referencia = this.FormDireccionLocal.get('Referencia')?.value;
    const direccion:Direccion = {
      Calle,
      Numero,
      Ciudad,
      Referencia
    };
    let pedidoYDireccion = new PedidoYDireccion();
    pedidoYDireccion.pedido = this.Pedidos;
    pedidoYDireccion.direccion = direccion;
    this.pedidoCreado.emit(pedidoYDireccion);
    this.cambioEstado.emit(Estados.Envio);
  }

  onImagenesCargadas(imagenes: string[]){
    this.imagenes = imagenes;
    if (this.componenteHijo) {
      this.componenteHijo.archivosSubidos = true;
    }
  }

}
