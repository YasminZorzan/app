import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.scss'],
})
export class ModalFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  recebeScore(score: number) {
    console.log(score);
  }

}
