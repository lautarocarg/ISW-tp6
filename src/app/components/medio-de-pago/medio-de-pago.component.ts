import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medio-de-pago',
  templateUrl: './medio-de-pago.component.html',
  styleUrls: ['./medio-de-pago.component.css']
})
export class MedioDePagoComponent {

  constructor(private router: Router) {}

  siguiente(){
    this.router.navigate(['/entrega']);
  }

  atras(){
    this.router.navigate(['/resumen']);
  }

}
