import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/models/aula.model';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-aulas-salvas',
  templateUrl: './aulas-salvas.page.html',
  styleUrls: ['./aulas-salvas.page.scss'],
})
export class AulasSalvasPage implements OnInit {

  aulasFavoritas: Aula[] = [];
  pageSize = 12;
  page = 0;

  constructor(private aulasService: AulasService) { }

  ngOnInit(): void {
    this.aulasService.getAulasFavoritasDetalhes(this.pageSize, (this.pageSize * this.page)).subscribe((result: Aula[]) => this.aulasFavoritas = result);
  }

  onScroll(): void {
    if (this.aulasFavoritas.length % this.pageSize === 0) {
      this.page += 1;
      this.aulasService.getAulasFavoritasDetalhes(this.pageSize, (this.pageSize * this.page)).subscribe((result: Aula[]) => this.aulasFavoritas = this.aulasFavoritas.concat(result));
    }
  }
}
