import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.page.html',
  styleUrls: ['./novo-usuario.page.scss'],
})
export class NovoUsuarioPage implements OnInit {

	registrationForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router, private modalController: ModalController) {
		this.registrationForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email, Validators.minLength(7)]],
			nome: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]],
			sobrenome: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]],
			username: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
			localizacao: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(2)]]
		});
	}

	Salvar(): void {
		if (this.registrationForm.valid) {
		  const modelVerificacao = {
			Email: this.registrationForm.value.email,
			Username: this.registrationForm.value.username
		  };
		  this.usersService.verificarDadosCadastro(modelVerificacao).subscribe(() => {
			this.usersService.createProfile(this.registrationForm.value).subscribe((result: any) => {
			  this.usersService.getProfiles(true).subscribe(profiles => {});
			  this.usersService.setProfile(result.idProfile).subscribe(data => {
				this.router.navigate(['/minha-conta']);
			  });
			});
		  });
		} else {
		  Object.keys(this.registrationForm.controls).forEach(field => {
			const control = this.registrationForm.get(field);
			control.markAsTouched({ onlySelf: true });
		  });
		}
	}

	ngOnInit() {

	}

}
