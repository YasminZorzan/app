import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.page.html',
  styleUrls: ['./programas.page.scss'],
})
export class ProgramasPage implements OnInit {

  programas = [
		{
      tipoDoCard: "programa",
			bg: "/assets/img/programa-1.jpg",
      titulo: "Título do Programa",
      quantidadeDeAulas: 12,
      vezesConcluido: 2.127,
      link: "/home",
      engajamento: 273,
      descricaoDesafio: "25 km em 3 dias",
      datasDesafio: "24/04 > 27/04"
		},
    {
      tipoDoCard: "desafio",
			bg: "/assets/img/programa-1.jpg",
      titulo: "Título do Programa",
      quantidadeDeAulas: 12,
      vezesConcluido: 2.127,
      link: "/home",
      engajamento: 273,
      descricaoDesafio: "25 km em 3 dias",
      datasDesafio: "24/04 > 27/04"
		},
		{
			bg: "/assets/img/programa-1.jpg",
      titulo: "Título do Programa",
      quantidadeDeAulas: 12,
      vezesConcluido: 2.127,
      link: "/home"
		}
	];

  constructor() { }

  ngOnInit() {
  }

}
