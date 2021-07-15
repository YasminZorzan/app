import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aula } from 'src/app/models/aula.model';
import { InstrutorDetalhe } from 'src/app/models/instrutor-detalhe.model';
import { AulasService } from 'src/app/services/aulas.service';
import { InstrutoresService } from 'src/app/services/instrutores.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
})
export class ProfessorPage implements OnInit {

  idInstrutor: number;
  instrutor: InstrutorDetalhe;
  aulas: Aula[] = [];
  page = 0;
  pageSize = 12;

  constructor(private instrutoresService: InstrutoresService, private aulasService: AulasService, private activatedRoute: ActivatedRoute) {
    this.idInstrutor = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.instrutoresService.getInstrutor(this.idInstrutor).subscribe((resultInstrutor: InstrutorDetalhe) => {
      this.instrutor = resultInstrutor;
      this.aulasService.pesquisar({ idInstrutor: this.idInstrutor }, 'recentes', this.pageSize, this.page).subscribe((result: any) => this.aulas = this.aulas.concat(result.body));
    });
  }

}
