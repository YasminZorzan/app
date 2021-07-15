import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-programa',
  templateUrl: './card-programa.component.html',
  styleUrls: ['./card-programa.component.scss'],
})
export class CardProgramaComponent implements OnInit {

  @Input() cardHeight: number;

  @Input() tipoDoCard: string;
  @Input() bg: string;
  @Input() titulo: string;
  @Input() quantidadeDeAulas: string;
  @Input() vezesConcluido: string;
  @Input() link: string;
  @Input() engajamento: string;
  @Input() descricaoDesafio: string;
  @Input() datasDesafio: string;

  constructor() { }

  ngOnInit() {}

}