import { Component, OnInit, Input } from '@angular/core';
import { Aula } from 'src/app/models/aula.model';

@Component({
  selector: 'app-card-aula',
  templateUrl: './card-aula.component.html',
  styleUrls: ['./card-aula.component.scss'],
})

export class CardAulaComponent implements OnInit {

  @Input() cardHeight: number;

  @Input() aula;

  @Input() salvo: string;
  @Input() calendario: string;
  @Input() check: string;
  
  constructor() { }

  ngOnInit() {}

}
