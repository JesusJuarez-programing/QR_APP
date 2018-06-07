//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {
  private _historial: ScanData[] = [];

  constructor(private lab:InAppBrowser) {
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

  abrir_san(index: number){
    let ScanData = this._historial[index];
    console.log(ScanData);
    switch(ScanData.tipo){
      case "http":
        this.lab.create(ScanData.info, "_system");
      break;
      default:
        console.error("Tipo no soportado");
    }
  }
}