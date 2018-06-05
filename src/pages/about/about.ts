import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  resultado: any;

  constructor(public navCtrl: NavController, private _historialProvider: HistorialProvider) {
    this.resultado = this._historialProvider.cargar_historial;
    console.log( this._historialProvider.cargar_historial);
  } 
}