import { Component, ViewChild } from '@angular/core';
import {Direccion , Ciudades } from 'src/app/models/direccion';
import { Pedido } from 'src/app/models/pedido';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SharedImagesDataService } from 'src/app/services/shared-images-data.service';
import { ImageUploadComponent } from '../image-upload/image-upload.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  @ViewChild(ImageUploadComponent) componenteHijo: ImageUploadComponent | undefined;
  FormPedido: FormGroup; // Define FormPedido
  FormDireccionLocal: FormGroup; // Define FormDireccionLocal

  constructor(
    private router: Router,
    private sharedDataService: SharedImagesDataService,
    private fb: FormBuilder
    ) {
      this.FormPedido = this.fb.group({
      Productos: new FormControl('', [Validators.required])
      // Define los campos y validadores del formulario aquí
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
  nuevoPedido: Pedido = new Pedido();
  datosFormulario: any;
  

  agregarPedido() {
    const descripcionTextArea = document.getElementById('descripcionPedido') as HTMLTextAreaElement;
    this.descripcion = descripcionTextArea.value
    if (this.descripcion.trim() !== '') {
      this.nuevoPedido.Descripcion = this.descripcion;
      let imagenes = this.sharedDataService.getImagenes();
      this.nuevoPedido.Imagenes = imagenes,
      this.Pedidos.push(this.nuevoPedido);
      this.nuevoPedido = new Pedido();
      this.flagTablaPedidos = false;
      this.sharedDataService.setImagenes([]);
      this.actualizarImagenesCargadas();
    }
  }
  actualizarImagenesCargadas() {
    if (this.componenteHijo) {
      this.componenteHijo.uploadedFileNames = [];
      this.componenteHijo.archivosSubidos = false;
    }
  }

  enviarFormulario() {
    const productos = this.FormPedido.get('productos')?.value;
    const Calle = this.FormDireccionLocal.get('Calle')?.value.toString();
    const Numero = this.FormDireccionLocal.get('Numero')?.value;
    const Ciudad = this.FormDireccionLocal.get('Ciudad')?.value;
    const Referencia = this.FormDireccionLocal.get('Referencia')?.value;
    const direccion:Direccion = {
      Calle,
      Numero,
      Ciudad,
      Referencia
    };
    if (productos && direccion) {
      this.datosFormulario = {
        productos,
        direccion
      }
    }
  }

}
