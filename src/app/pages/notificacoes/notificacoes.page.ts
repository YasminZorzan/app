import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacaoModel } from 'src/app/models/notificacao.model';
import { TipoNotificacaoEnum } from 'src/app/models/tipo-notificacao.enum';
import { NotificacoesService } from 'src/app/services/notificacoes.service';
import * as moment from 'moment';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {

  notificacoes: NotificacaoModel[] = [];

  pageSize = 10;
  page = 0;

  constructor(private notificacoesService: NotificacoesService, private change: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.getNotificacoes();
    this.notificacoesService.getNotificacoesCallback().subscribe((item: NotificacaoModel) => {
      console.log(item);
      this.change.markForCheck();
    });
  }

  onScroll(): void {
    this.getNotificacoes();
  }

  hasNotificacaoNaoLida(): boolean {
    return this.notificacoes.filter(item => !item.lida).length > 0;
  }

  getExtrasNotificacao(extras: string): any {
    return JSON.parse(extras);
  }

  private getNotificacoes(): void {
    this.notificacoesService.getNotificacoes(this.pageSize, (this.pageSize * this.page)).subscribe((result: NotificacaoModel[]) => {
      this.notificacoes = this.notificacoes.concat(result);
      this.change.markForCheck();
    });
  }

  clickNotificacao(item: NotificacaoModel): void {
    switch (item.tipo) {
      case TipoNotificacaoEnum.ConviteAmizade:
      case TipoNotificacaoEnum.RespostaConviteAmizade:
        this.router.navigate(['/perfil', this.getExtrasNotificacao(item.extras).Username]);
        break;
      default:
        break;
    }
  }

}
