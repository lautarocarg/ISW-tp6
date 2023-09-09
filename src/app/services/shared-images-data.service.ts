import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedImagesDataService {

  private imagenes: string[] = [];

  setImagenes(imagenes: string[]) {
    this.imagenes = imagenes;
  }

  getImagenes() {
    return this.imagenes;
  }
}
