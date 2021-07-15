import { Component, OnInit } from '@angular/core';
import { Instrutor } from 'src/app/models/instrutor.model';
import { InstrutoresService } from 'src/app/services/instrutores.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit {

  instrutores: Instrutor[] = [];
  pageSize = 20;
  page = 0;

  sortParam = '';

  constructor(private instrutoresService: InstrutoresService) { }

  ngOnInit(): void {
    this.instrutoresService.getInstrutores(this.pageSize, this.page).subscribe((result: any) => this.instrutores = result.body);
  }

  sortInstrutores(param: string) {
    console.log(this.sortParam)
    if(param == 'az') {
      this.instrutores.sort((a, b) => {
        if(a.nome > b.nome) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    if(param == 'za') {
      this.instrutores.sort((a, b) => {
        if(a.nome > b.nome) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    if(param == 'views') {
      this.instrutores.sort((a, b) => {
        if(a.qtdAulasAssistidas > b.qtdAulasAssistidas) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    if(param == 'aulas') {
      this.instrutores.sort((a, b) => {
        if(a.qtdAulas === b.qtdAulas) {
          return b.qtdAulasAssistidas - a.qtdAulasAssistidas;
        } else {
          return b.qtdAulas - a.qtdAulas;
        }
      });
    }
  }

}
