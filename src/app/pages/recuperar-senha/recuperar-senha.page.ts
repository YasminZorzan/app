import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
	selector: 'app-recuperar-senha',
	templateUrl: './recuperar-senha.page.html',
	styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

	emailEnviado = false;

	registrationForm: FormGroup;
	constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) {
		this.registrationForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]]
		});
	}

	lembrarSenha(): void {
		if (this.registrationForm.valid) {
			this.auth.lembrarSenha(this.registrationForm.value).subscribe(result => {
				this.emailEnviado = true;
			});
		} else {
			Object.keys(this.registrationForm.controls).forEach(field => {
				const control = this.registrationForm.get(field);
				control.markAsTouched({ onlySelf: true });
			});
		}
	}

	novaSenha() {

	}

	ngOnInit() {
	}

}
