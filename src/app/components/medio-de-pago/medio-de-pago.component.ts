import { Component , OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-medio-de-pago',
  templateUrl: './medio-de-pago.component.html',
  styleUrls: ['./medio-de-pago.component.css']
})
export class MedioDePagoComponent {

  constructor(private router: Router) {}

  precioPedido: number = 1000; // Reemplaza 1000 con el precio real del pedido
  medioDePago: string = 'Efectivo';
  submitted = false;

  @Output() estado = new EventEmitter<string>();
  @Output() info = new EventEmitter<{ Vuelto: number }>();

  seleccionarMedioDePago(medioDePago: string){
    this.medioDePago = medioDePago;
  }
/*
   verCambiosEnElMonto() {
    this.FormTipoEfectivo.get('Monto')?.valueChanges.subscribe((monto) => {
      if (this.medioDePago === 'Efectivo' && this.FormTipoEfectivo.valid) {
        const vuelto = this.calcularVuelto(monto);

        // Emitir el vuelto como un objeto
        this.info.emit({ Vuelto: vuelto });
      }
    });
  }
*/
  calcularVuelto(montoPago: number): number {
    return montoPago - this.precioPedido;
  }

  siguiente(){
    //Seleccionó efectivo y la formEfectivo es válida
  }

  volver(){
    this.estado.emit('D');
  }

  //VALIDACIONES

  fechaDeHoy = new Date();
  mesHoy = this.fechaDeHoy.getMonth();
  anioHoy = this.fechaDeHoy.getFullYear();


  //Te chequea la tarjeta crack
  luhnAlgorithm(value:string) {
    // accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
        var nCheck = 0, nDigit = 0, bEven = false;
        value = value.replace(/\D/g, "");
        console.log(value)

        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        console.log((nCheck % 10) == 0)

        return (nCheck % 10) == 0;
  }

  validezCampo(campo:string){
    return "";

  }
  errorDePatron(campo:string){
    return "";
  }
  errorDeRequerido(campo:string){

  }


  //PATRONES DE VALIDACION

  FormTipoEfectivo = new FormGroup({
    Monto: new FormControl('',[
      Validators.pattern('[0-9]*'),
      Validators.required,
      Validators.min(1),
      Validators.max(20000),
    ])
  });

  FormTipoTarjeta = new FormGroup({
    NombreApellido: new FormControl('',[
      Validators.required,
    ]),
    NumeroTarjeta: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '[0-9]{16}'
      )
    ]),
    Vencimiento: new FormControl('',[
      Validators.required,
      Validators.pattern(
        '(0[1-9]|1[012])[-/][2-3][0-9]'
      ),
    ]),
    CodigoSeguridad: new FormControl('',[
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3),
    ])
  });

  validateExpiry (input:any) {
    // ensure basic format is correct
    if (input.match(/^(0\d|1[0-2])\/\d{2}$/)) {
      const {0: month, 1: year} = input.split("/");

      // get midnight of first day of the next month
      var correctYear = parseInt("20" + year);
      const expiry = new Date(correctYear, month);
      const current = new Date();

      return expiry.getTime() > current.getTime();

    } else return false;
  }

}
