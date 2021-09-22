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
    if (this.validateFields())
      return this.showMessage('Preencha todos os campos!');

    const imc = this.weight / (this.height * this.height);

    this.showMessage(`IMC = ${imc.toFixed(2)}`);
  };

  showMessage = async (msg: string) => {
    const previousToast = await this.toastController.getTop();

    if (previousToast) {
      await this.toastController.dismiss();
    }

    const toast = await this.toastController.create({
      color: "light",
      message: msg,
      buttons: [{ icon: 'close' }],
    });

    toast.present();
  };

  validateFields = () => {
    if (!this.weight || !this.height) {
      return true;
    }
  };
}
