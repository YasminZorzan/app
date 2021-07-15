import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() menuAtivo:string;
  @Input() profile;

  menuAberto:boolean = false;

  constructor(private router: Router) { }

  img:string = "/assets/img/usuario-1.jpg";

  ngOnInit() {}

}
