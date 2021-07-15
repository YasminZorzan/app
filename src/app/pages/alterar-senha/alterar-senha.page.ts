import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

  alteraForm: FormGroup;
  
  step = 0;

  vald = [
    {
      id: 1,
      label: '8 caracteres',
      valid: true
    },
    {
      id: 2,
      label: '1 caracter especial',
      valid: false
    },
    {
      id: 3,
      label: '1 número',
      valid: false
    },
  ]

  constructor(
    private authService: AuthService,
    // private alertService: AlertService,
    private router: Router,
    private fb: FormBuilder,
    public alertController: AlertController
  ) {
    this.alteraForm = this.fb.group({
      senhaAtual: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  async ionAlert(title: string, subtitle: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      header: title,
      subHeader: subtitle,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

  nextStep() {
    this.step += 1;
  }

  isValid(field, type) {
    if(type == 'min') {
      return this.alteraForm.get(field).value.length >= 8;
    } else if(type == 'caracter') {
      var reg = new RegExp('[@_!#$%^&*()<>?/|}{~:]');
      return reg.test(this.alteraForm.get(field).value);
    } else if(type == 'num') {
      var reg = new RegExp('[0-9]');
      return reg.test(this.alteraForm.get(field).value);
    }
  }

  salvar(): void {
    if (this.alteraForm.valid) {
      const senhaAtualValid = this.alteraForm.controls.senhaAtual.errors === null;
      const senhaValid = this.alteraForm.controls.password.errors === null;
      const confirmarSenhaValid = this.alteraForm.value.password === this.alteraForm.value.confirmPassword;
      if (!confirmarSenhaValid) {
        this.ionAlert('', 'Senha incorreta', 'As senhas devem ser iguais');
      } else {
        if (senhaAtualValid && senhaValid) {
          const model = {
            senhaAntiga: this.alteraForm.value.senhaAtual,
            senhaNova: this.alteraForm.value.password
          };
          this.authService.trocarSenha(model).subscribe(() => {
            this.step = 0;
            this.ionAlert('', 'Senha', 'Senha alterada');
            this.router.navigate(['/minha-conta'])
            this.alteraForm.setValue({
              senhaAtual: '',
              password: '',
              confirmPassword: ''
            });
          });
        }
      }
    } else {
      Object.keys(this.alteraForm.controls).forEach(field => {
        const control = this.alteraForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
