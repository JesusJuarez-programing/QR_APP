import { Component } from '@angular/core';
import { Platform, ToastController, NavController } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, public toast: ToastController,
              private platform: Platform, private _historialProvider: HistorialProvider) {
    
  }

  scan(){
    console.log("Realizando scan...");
    if (!this.platform.is('cordova')){
      this._historialProvider.agregar_historial("http://google.com");
    }

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
         this.presentToast("Error: " + err);
     });
  }


  presentToast(mensaje:string){
    const toast = this.toast.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }
}