import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { NotificacaoModel } from '../models/notificacao.model';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class NotificacoesService {
  notificacoes: NotificacaoModel[] = [];
  offset: number;
  private subjectNotificacoes = new Subject<any>();

  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  public getNotificacoesCallback(): Observable<any> {
    return this.subjectNotificacoes.asObservable();
  }

  getNotificacoes(limit = 10, offset = 0): Observable<any> {
    return new Observable(observer => {
      if (this.offset !== offset) {
        const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
        this.http.get(`${environment.apiUrl}/notificacoes/${this.auth.currentUser?.profileId}?limit=${limit}&offset=${offset}`,
        { headers: authHeader }).subscribe((result: NotificacaoModel[]) => {
          this.offset = offset;
          observer.next(result);
          this.notificacoes = this.notificacoes.concat(result);
        });
      } else {
        observer.next(this.notificacoes);
      }
    });
  }

  marcarLidas(ids: string[]): Observable<any> {
    return new Observable(observer => {
      const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
      return this.http.post(`${environment.apiUrl}/notificacoes/${this.auth.currentUser?.profileId}/marcar-lidas`,
        { ids }, { headers: authHeader }).subscribe(() => {
          this.notificacoes.filter(i => ids.indexOf(i.id) !== -1).forEach(i => i.lida = true);
          observer.next(this.notificacoes);
        });
    });
  }

  receiveNotificacao(model: NotificacaoModel): void {
    if (model.idProfile === this.auth.currentUser?.profileId) {
      this.notificacoes.unshift(model);
      this.subjectNotificacoes.next(model);
    }
  }

  clearNotificacoes(): void {
    this.notificacoes = [];
    this.offset = undefined;
  }
}
