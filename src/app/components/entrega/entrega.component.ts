import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent {

  seleccionForma = 'loAntesPosible';
  ngOnInit(): void {

  }

  submitted = false;
  fechaHoy = new Date();

  parsearMes(mes:string){
    if (parseInt(mes)>=10 && parseInt(mes)<=12){
      return mes;
    }
    else{
      return '0'+parseInt(mes).toString();
    }
  }
  parsearDia(dia:string){
    if (parseInt(dia)>=10 && parseInt(dia)<=31){
      return dia;
    }
    else{
      return '0'+parseInt(dia).toString();
    }
  }

  entraEnRango(fecha:string){
    let mesI = this.parsearMes(fecha.slice(3,5));
    let diaI = this.parsearDia(fecha.slice(0,2));

    let fechaI =  parseInt(fecha.slice(6,10)+ mesI + diaI);
    let hoy = parseInt(this.fechaHoy.getFullYear().toString()+this.parsearMes((this.fechaHoy.getMonth()+1).toString())+this.parsearDia(this.fechaHoy.getDate().toString()));

    let diferenciaDias = fechaI - hoy;

    return (diferenciaDias <= 5 && diferenciaDias >= 1);
  }



  //LÓGICA DE INTERFAZ
  quiereFechaYHora(){

  }

  //VALIDACIONES

  validezCampo(campo:string){

  }
  errorDePatron(campo:string){

  }
  errorDeRequerido(campo:string){
  }

  FormTipoEntrega = new FormGroup({
    Forma: new FormControl(true, [Validators.required]),
  })

  FormFechaHora = new FormGroup({
    Fecha: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern(
        '(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](20)[2-3][0-9]'
      ),
    ]),
    Hora: new FormControl('',[
      Validators.required,
      Validators.maxLength(5),
      Validators.minLength(5),
      Validators.pattern(
        '(0[89]|1[0-9]|2[0-2])[-:]([0-5][0-9])'
      )
    ])
  });


}
