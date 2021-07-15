import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
	selector: 'app-cadastrar-nova-senha',
	templateUrl: './cadastrar-nova-senha.page.html',
	styleUrls: ['./cadastrar-nova-senha.page.scss'],
})
export class CadastrarNovaSenhaPage implements OnInit {

	senhaEnviada = false;

	angForm: FormGroup;
	constructor(private fb: FormBuilder,
		private auth: AuthService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		//   private alertService: AlertService
	) {
		const resetCode = this.activatedRoute.snapshot.queryParams.code;
		if (resetCode && resetCode !== '') {
			this.angForm = this.fb.group({
				email: ['', [Validators.required, Validators.email]],
				code: [''],
				password: ['', [Validators.required]],
				confirmPassword: ['', [Validators.required]]
			});
			this.angForm.controls.code.setValue(resetCode);
		} else {
			this.router.navigate(['/login']);
		}
	}


	resetarSenha(): void {
		const emailValid = this.angForm.controls.email.errors === null;
		const senhaValid = this.angForm.controls.password.errors === null;
		const confirmarSenhaValid = this.angForm.value.password === this.angForm.value.confirmPassword;
		if (!confirmarSenhaValid) {
			// this.alertService.warn('Senhas não conferem.');
		} else {
			if (emailValid && senhaValid) {
				// this.alertService.success('Senha alterada com sucesso!');
				this.senhaEnviada = true;
				this.auth.recuperarSenha(this.angForm.value).subscribe(result => this.router.navigate(['/login']));
			} else {
				Object.keys(this.angForm.controls).forEach(field => {
					const control = this.angForm.get(field);
					control.markAsTouched({ onlySelf: true });
				});
			}
		}
	}

	ngOnInit() {
	}

}
