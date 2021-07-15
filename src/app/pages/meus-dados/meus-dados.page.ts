import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  userDataForm = this.formBuilder.group({
		email: [
			'',
			[
				Validators.required,
				Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
			]
		],
		nome: ['', [Validators.required, Validators.minLength(3)]],
		sobrenome: ['', [Validators.required, Validators.minLength(3)]],
		nomeUsuario: ['', [Validators.required, Validators.minLength(3)]],
		localizacao: ['', [Validators.required, Validators.minLength(3)]],
	});

	get email() {
		return this.userDataForm.get('email');
	}

	get nome() {
		return this.userDataForm.get('nome');
	}

	get sobrenome() {
		return this.userDataForm.get('sobrenome');
	}

	get nomeUsuario() {
		return this.userDataForm.get('nomeUsuario');
	}

	get localizacao() {
		return this.userDataForm.get('localizacao');
	}

  ngOnInit() {
  }

}
