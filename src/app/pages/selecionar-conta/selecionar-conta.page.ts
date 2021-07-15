import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileReferenceModel } from 'src/app/models/profile-reference.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-selecionar-conta',
	templateUrl: './selecionar-conta.page.html',
	styleUrls: ['./selecionar-conta.page.scss'],
})
export class SelecionarContaPage implements OnInit {

	constructor(private usersService: UsersService, private router: Router) { }

	profiles: ProfileReferenceModel[] = [];

	users = [
		{
			nome: "Danilo Gomes",
			img: "",
			active: true
		},
		{
			nome: "Pâmela Souza",
			img: "/assets/img/usuario-1.jpg",
			active: false
		}
	];

	toggleClass(user){
		
		this.users.map(a=>a.active=false);
		user.active = !user.active;
	}

	ngOnInit() {
		this.usersService.getProfiles().subscribe((data: ProfileReferenceModel[]) => this.profiles = data );
	}

	setProfile(item): void {
		this.usersService.setProfile(item.idProfile).subscribe(data => {
			this.router.navigate(['/home']);
		});
	}

}
