import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController, private auth: AuthService) { }

  userName: string;
  password: string;
  erro = false;

  ngOnInit() {
  }

  // login() {
  //   this.erro = false;
  //   this.router.navigate(['/selecionar-conta']);
  //   // this.auth.login({email: this.userName, password: this.password}).subscribe(async res => {
  //   //   if (res) {
  //   //     this.router.navigateByUrl('/home');
  //   //   } else {
  //   //     const alert = await this.alertCtrl.create({
  //   //       header: 'Login Failed',
  //   //       message: 'Wrong credentials.',
  //   //       buttons: ['OK']
  //   //     });
  //   //     await alert.present();
  //   //   }
  //   // });
  //   this.auth.login({email: this.userName, password: this.password}).subscribe(async res => {
  //     if (res) {
  //       this.router.navigateByUrl('/members');
  //     } else {
  //       const alert = await this.alertCtrl.create({
  //         header: 'Login Failed',
  //         message: 'Wrong credentials.',
  //         buttons: ['OK']
  //       });
  //       await alert.present();
  //     }
  //   });
  // }

  login(): void {
      this.auth.login({email: this.userName, password: this.password}).subscribe((result) => {
        // this.signalRService.initializeConnection();
        // this.aulasService.getAulasFavoritas();
        console.log('REsultado', result);
        this.router.navigate(['/selecionar-conta'])
      });
  }
}
