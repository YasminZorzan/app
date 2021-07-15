import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-live',
  templateUrl: './card-live.component.html',
  styleUrls: ['./card-live.component.scss'],
})
export class CardLiveComponent implements OnInit {

  @Input('live') live;

  @Input() fotoDestaque: string;
  @Input() empresa: string;
  @Input() tipoDeTreino: string;
  @Input() equipamento: string;
  @Input() tituloDaLive: string;
  @Input() professor: string;
  @Input() tipoDeLive: string;
  @Input() data: string;
  @Input() hora: string;
  @Input() duracao: string;

  agora: any = new Date();
  dataLive: any;
  liveFutura: boolean = false;
  tempoRestante;

  constructor() { }

  toDate(dateStr) {
    var dateParts = dateStr.split("/");
    var hourparts = this.hora.split("h");
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0],parseInt(hourparts[0]),parseInt(hourparts[1]));
  }

  ngOnInit() {

    // this.dataLive = this.toDate(this.data);

    console.log(this.dataLive);
  
    if (this.dataLive > this.agora) {
      this.liveFutura = true;
    }

    var delta = Math.abs(this.dataLive - this.agora) / 1000;

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = delta % 60;

    if(minutes < 60){
      this.tempoRestante = minutes + " minutos";
    }else if(hours < 24){
      this.tempoRestante = hours + " horas";
    }else{
      this.tempoRestante = days + " dias";
    }


    

  }

}
