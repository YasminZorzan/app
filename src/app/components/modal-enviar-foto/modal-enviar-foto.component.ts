import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-enviar-foto',
  templateUrl: './modal-enviar-foto.component.html',
  styleUrls: ['./modal-enviar-foto.component.scss'],
})
export class ModalEnviarFotoComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async callback(type: string) {
    await this.modalController.dismiss(type);
  }
}
