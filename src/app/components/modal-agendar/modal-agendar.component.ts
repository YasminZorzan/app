import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-agendar',
  templateUrl: './modal-agendar.component.html',
  styleUrls: ['./modal-agendar.component.scss'],
})
export class ModalAgendarComponent implements OnInit {

  agendada:boolean = true;

  constructor() { }

  ngOnInit() {}

  setAgendada() {
    this.agendada = !this.agendada;
  }

}
