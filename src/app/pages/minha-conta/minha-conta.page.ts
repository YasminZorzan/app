import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { ModalExcluirUsuarioComponent } from 'src/app/components/modal-excluir-usuario/modal-excluir-usuario.component';
import { UsersService } from 'src/app/services/users.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalEnviarFotoComponent } from 'src/app/components/modal-enviar-foto/modal-enviar-foto.component';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.page.html',
  styleUrls: ['./minha-conta.page.scss'],
})
export class MinhaContaPage implements OnInit {

  // Perfis
  dadosDeCobranca;
  exclusaoId: number;
  profiles = [];
  currentProfileId;

  // Perfil

  perfilForm: FormGroup;

  fotoDestaque: any;
  previewUrl: string | ArrayBuffer;

  menu = [
    {
      id: 0,
      label: 'dados do perfil'
    },
    {
      id: 1,
      label: 'dados de cobrança'
    },
    {
      id: 2,
      label: 'usuários'
    },
    {
      id: 3,
      label: 'conta'
    },
  ]

  currentPage = 3;

  constructor(private usersService: UsersService,
    private authService: AuthService, private modalController: ModalController, private fb: FormBuilder, public actionSheetController: ActionSheetController, private camera: Camera) {
      this.perfilForm = this.fb.group({
        idUsuario: ['', Validators.required],
        idProfile: ['', Validators.required],
        nome: ['', [Validators.required, Validators.maxLength(100)]],
        sobrenome: ['', [Validators.maxLength(100)]],
        localizacao: ['', [Validators.maxLength(200)]]
      });
    }

  ngOnInit() {
    this.currentProfileId = this.authService.currentUser?.profileId;
    this.usersService.getProfiles(true).subscribe(result => this.profiles = result);

    this.usersService.getProfileEdit().subscribe(result => this.perfilForm.setValue(result));
    this.previewUrl = this.authService.currentUser?.foto;
  }

  async openModal(userName: string, idProfile: number) {
    const modal = await this.modalController.create({
      component: ModalExcluirUsuarioComponent,
      componentProps: {
        "userName": userName,
        "idProfile": idProfile,
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data.data !== null) {
        this.exclusaoId = data.data;
        this.excluirPerfil();
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  excluirPerfil(): void {
    this.usersService.excluirPerfil(this.exclusaoId).subscribe(() => {
      this.usersService.getProfiles(true).subscribe(result => {
        this.profiles = result;
        this.exclusaoId = undefined;
      });
    });
  }

  setMenu(id) {
    this.currentPage = id;
  }

  salvar(): void {
    if (this.perfilForm.valid) {
      this.usersService.editProfile(this.perfilForm.value, this.fotoDestaque).subscribe(() => {
        this.usersService.getMyProfile().subscribe(result => {
          this.authService.setCurrentUser(result);
          // this.alertService.success('Perfil atualizado!');
        });
      });
    }
  }

  async fotoModal(id) {
    const modal = await this.modalController.create({
      component: ModalEnviarFotoComponent,
      cssClass: 'default-modal',
    });

    modal.onDidDismiss().then((data) => {
      if (data.data !== null) {
        if(data.data == 'camera') {
          this.getFoto(this.camera.PictureSourceType.CAMERA, id);
        }
        if(data.data == 'galeria') {
          this.getFoto(this.camera.PictureSourceType.PHOTOLIBRARY, id);
        }
      }
    });

    return await modal.present();
  }

  getFoto(srcType, id) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: srcType,
    };
    this.camera.getPicture(options).then((imageData) => {
      this.fotoDestaque = `data:image/jpeg;base64,${imageData}`;
    });
  }

}
