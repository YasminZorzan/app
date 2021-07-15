import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-excluir-usuario',
  templateUrl: './modal-excluir-usuario.component.html',
  styleUrls: ['./modal-excluir-usuario.component.scss'],
})
export class ModalExcluirUsuarioComponent implements OnInit {

  @Input('userName') userName: string;
  @Input('idProfile') idProfile: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async deleteUser() {
    await this.modalController.dismiss(this.idProfile);
  }

  async cancel() {
    await this.modalController.dismiss(null);
  }

}
