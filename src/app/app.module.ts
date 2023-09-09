import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { DireccionLocalComponent } from './components/direccion-local/direccion-local.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { MedioDePagoComponent } from './components/medio-de-pago/medio-de-pago.component';
import { EntregaComponent } from './components/entrega/entrega.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { BtnNavegacionComponent } from './components/btn-navegacion/btn-navegacion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PedidoComponent,
    DireccionLocalComponent,
    ResumenComponent,
    MedioDePagoComponent,
    EntregaComponent,
    ImageUploadComponent,
    BtnNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
