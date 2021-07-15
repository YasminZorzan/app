import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  @Output() rateChanged = new EventEmitter();

  range = [];
  maxScore = 5;
  marked = -1;

  constructor() { }

  ngOnInit() {
    for (var i = 0; i < this.maxScore; i++) {
      this.range.push(i);
      console.log('Max Score')
    }
  }

  public mark = (index) => {
    this.marked = index + 1;
    this.rateChanged.next(this.marked);
  }

  public isMarked = (index) => {
    return index >= this.marked;
  }

}
