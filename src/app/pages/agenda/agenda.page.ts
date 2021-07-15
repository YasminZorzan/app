import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAulaAgendaComponent } from 'src/app/components/modal-aula-agenda/modal-aula-agenda.component';
import { ModalDiaAgendaComponent } from 'src/app/components/modal-dia-agenda/modal-dia-agenda.component';
import { Agendamento, AgendamentosService } from 'src/app/services/agendamentos.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  agendamentos: Agendamento[];


  viewTitle;
  slideEventosAberto:boolean = false;


  eventSource = [
    {
      title: "Meu Evento chave",
      startTime: this.toDate('18/05/2021'),
      endTime: this.toDate('18/05/2021'),
      allDay: true,
      empresa: "Kore"
    },
    {
      title: "Meu Evento chave",
      startTime: this.toDate('20/05/2021'),
      endTime: this.toDate('20/05/2021'),
      allDay: true,
      empresa: "Velocity"
    },
  ];

  calendar = {
    mode: 'month',

    currentDate: new Date(),
    dateFormatter: {
        formatMonthViewDay: function(date:Date) {
            return date.getDate().toString();
        },
        formatMonthViewDayHeader: function(date:Date) {
            return 'MonMH';
        },
        formatMonthViewTitle: function(date:Date) {
            return 'testMT';
        },
        formatWeekViewDayHeader: function(date:Date) {
            return 'MonWH';
        },
        formatWeekViewTitle: function(date:Date) {
            return 'testWT';
        },
        formatWeekViewHourColumn: function(date:Date) {
            return 'testWH';
        },
        formatDayViewHourColumn: function(date:Date) {
            return 'testDH';
        },
        formatDayViewTitle: function(date:Date) {
            return 'testDT';
        }
    }
  };

  constructor(private modal: ModalController, private agendamentosService: AgendamentosService ) { }

  async presentModalAula() {
    const modal = await this.modal.create({
      component: ModalAulaAgendaComponent,
      cssClass: 'modal-aula-agenda'
    });
    console.log("Abriu");
    return await modal.present();
  }
  async presentModalDia() {
    const modal = await this.modal.create({
      component: ModalDiaAgendaComponent,
       cssClass: 'modal-dia-agenda'
    });
    console.log("Abriu");
    return await modal.present();
  }


  ngOnInit() {
    this.presentModalDia();    
    this.agendamentosService.getList(new Date("2021-07-01"), new Date("2021-07-31")).subscribe(response => {this.agendamentos = response});
    

  }

  toDate(dateStr) {
    var dateParts = dateStr.split("/");
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onCurrentDateChanged(event:Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
  }


  mesAnterior() {
    let swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  proximoMes() {
    let swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  onEventSelected = (event) => {
    console.log(event);
  };
}
