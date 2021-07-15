import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-professor',
  templateUrl: './card-professor.component.html',
  styleUrls: ['./card-professor.component.scss'],
})
export class CardProfessorComponent implements OnInit {

  @Input() bg: string;
  @Input() nome: string;
  @Input() quantidadeDeAulas: string;
  @Input() visualizacoes: string;

  constructor() { }

  ngOnInit() {}

}
