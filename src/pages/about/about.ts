import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-data.model';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  resultado: ScanData[]=[];

  constructor(public navCtrl: NavController, private _historialProvider: HistorialProvider) {
    
  } 

  ionViewDidLoad(){

    this.resultado = this._historialProvider.cargar_historial();
    console.log( this._historialProvider.cargar_historial);
  }
}