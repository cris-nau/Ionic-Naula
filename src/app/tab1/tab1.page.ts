import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['Style.css']
})
export class Tab1Page {


  constructor(private alertController: AlertController) {}

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Hola',
      buttons: ['OK', 'Cancel'],
    });

    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Hola',
      buttons: ['OK', 'Cancel'],
    });

    await alert.present();
  }
  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Hola',
      buttons: ['OK', 'Cancel'],
    });

    await alert.present();
  }

}
