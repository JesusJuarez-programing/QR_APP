//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';

@Injectable()
export class HistorialProvider {
  private _historial: ScanData[] = [];

  constructor() {
    console.log('Hello HistorialProvider Provider');
  }

  agregar_historial(texto: string){
    let data = new ScanData(texto);
    //Unshift guarda al principio del array
    this._historial.unshift(data);
    console.log(this._historial);
  }

  cargar_historial(){
    return this._historial;
  }
}