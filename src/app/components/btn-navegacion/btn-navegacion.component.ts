import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-navegacion',
  templateUrl: './btn-navegacion.component.html',
  styleUrls: ['./btn-navegacion.component.css']
})
export class BtnNavegacionComponent {
  @Input() buttonText: string = "";
  @Input() routerLink: string = "";

  constructor(private router: Router) {}

  navigateTo(event: Event) {
    this.router.navigate([this.routerLink]);
  }

}
