import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-btn-navegacion',
  templateUrl: './btn-navegacion.component.html',
  styleUrls: ['./btn-navegacion.component.css']
})
export class BtnNavegacionComponent {
  @Input() buttonText: string = "";
  @Input() routerLink: string = "";
  @Input() datosFormulario: any; 

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateTo() {
    this.router.navigate([this.routerLink], {
      relativeTo: this.route,
      queryParams: { datos: JSON.stringify(this.datosFormulario) }
    });
  }

}
