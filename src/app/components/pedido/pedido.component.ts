import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  constructor(private router: Router) {}


  siguiente(){
    this.router.navigate(['/direccion-local']);
  }

}
