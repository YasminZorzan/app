import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-amigo',
  templateUrl: './card-amigo.component.html',
  styleUrls: ['./card-amigo.component.scss'],
})
export class CardAmigoComponent implements OnInit {

  @Input() foto: string;
  @Input() nome: string;
  @Input() local: string;

  constructor() { }

  ngOnInit() {}

}
