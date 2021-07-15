import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.page.html',
  styleUrls: ['./programa.page.scss'],
})
export class ProgramaPage implements OnInit {

  aulas = [
		{
			bg: "/assets/img/bg-01.jpg",
      salvo: true,
      calendario: true,
      check: true,
      duracao: "20’12’’",
      visualizacoes: "8.927",
      titulo: "20 min para morrer na bike",
      professor: "Nome Sobrenome do Professor"
		},
		{
			bg: "/assets/img/bg-01.jpg",
      salvo: false,
      calendario: false,
      check: false,
      duracao: "20’12’’",
      visualizacoes: "8.927",
      titulo: "20 min para morrer na bike",
      professor: "Nome Sobrenome do Professor"
		}
	];

  constructor() { }

  ngOnInit() {
  }

}
