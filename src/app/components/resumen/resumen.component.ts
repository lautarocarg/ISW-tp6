import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Direccion } from 'src/app/models/direccion';
import { Estados } from 'src/app/models/estados.enum';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {

  @Output() cambioEstado: EventEmitter<Estados> = new EventEmitter<Estados>();
  @Input() pedidos: Pedido[];
  @Input() direccionEnvio: Direccion;
  @Input() direccionPedido: Direccion;

  calcularTotal():number{
    let total = 0;
    for (let index = 0; index < this.pedidos.length; index++) {
      const precio = this.pedidos[index].Precio;
      total += precio;
    }
    return total
  }

  confirmarDatos(){
    this.cambioEstado.emit(Estados.Pago);
  }

  volverAlEnvio(){
    this.cambioEstado.emit(Estados.Envio);
  }

}
