import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss'],
})
export class ErrorHandlingComponent implements OnInit {

  @Input() field: AbstractControl | null = null;
  @Input() fieldName = '';

  constructor() { }

  ngOnInit() {}

}
