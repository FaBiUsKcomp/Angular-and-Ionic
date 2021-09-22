import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private toastController: ToastController) {}

  weight: number;
  height: number;

  onCalculate = () => {
    const imc = this.weight / (this.height * this.height);

    this.showMessage(`IMC = ${imc.toFixed(2)}`)
  };

  showMessage = async (msg: string) => {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
    });

    toast.present();
  };
}
