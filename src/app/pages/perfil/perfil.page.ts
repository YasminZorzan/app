import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { ProfileReferenceModel } from 'src/app/models/profile-reference.model';
import { AmizadesService } from 'src/app/services/amizades.service';
import { UsersService } from 'src/app/services/users.service';
import { ModalUsuariosComponent } from '../../components/modal-usuarios/modal-usuarios.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  menuItems = [
    {
      label: 'Trocar usuário',
      route: '/trocar-perfil',
      action: 'trocar-usuario'
    },
    {
      label: 'Painel',
      route: '/perfil',
      action: ''
    },
    {
      label: 'Histórico',
      route: '/historico',
      action: ''
    },
    {
      label: 'Minhas conquistas',
      route: '/minhas-conquistas',
      action: ''
    },
    {
      label: 'Meus amigos',
      route: '/meus-amigos',
      action: ''
    },
    {
      label: 'Estatísticas',
      route: '/estatisticas',
      action: ''
    },
    {
      label: 'Meus desafios',
      route: '/meus-desafios',
      action: ''
    },
    {
      label: 'Aulas salvas',
      route: '/aulas-salvas',
      action: ''
    },
    {
      label: 'Minha conta',
      route: '/minha-conta',
      action: ''
    }
  ]

  profile;
  amizades: ProfileReferenceModel[] = []

  constructor(private menu: MenuController, private router: Router, public modalController: ModalController, private amizadesService: AmizadesService, private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getMyProfile().subscribe(result => this.profile = result);
    this.amizadesService.getAmizades().subscribe(result => this.amizades = result.sort(() => 0.5 - Math.random()).slice(0, 10));
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalUsuariosComponent,
      cssClass: 'custom-modal'
    });
    console.log("Abriu");
    return await modal.present();
  }

  itemAction(item) {
    if(item.action == 'trocar-usuario') {
      console.log('Trocar usuário');
      this.presentModal();
    } else {
      this.router.navigate([item.route]);
    }
  }

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }

  closeMenu() {
    this.menu.close('menu'); 
  }

}
