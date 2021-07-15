import { Component, OnInit } from '@angular/core';
import { AulaAssistidaTop } from 'src/app/models/aula-assistida-top.model';
import { AulaAssistida } from 'src/app/models/aula-assistida.model';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  pageSize = 3;
  page = 0;
  aulasTimeline: AulaAssistida[] = [];
  aulasTop: AulaAssistidaTop[] = [];
  constructor(private aulasService: AulasService) { }

  ngOnInit(): void {
    this.aulasService.getAulasAssistidas(undefined, this.pageSize, (this.pageSize * this.page)).subscribe((result: AulaAssistida[]) => this.aulasTimeline = result);
    this.aulasService.getAulasAssistidasTop(this.pageSize, (this.pageSize * this.page)).subscribe((result: AulaAssistidaTop[]) => this.aulasTop = result);
  }

  onScroll(): void {
    if (this.aulasTimeline.length % this.pageSize === 0) {
      this.page += 1;
      this.aulasService.getAulasAssistidas(undefined, this.pageSize, (this.pageSize * this.page)).subscribe((result: AulaAssistida[]) => this.aulasTimeline = this.aulasTimeline.concat(result));
    }
  }

}
