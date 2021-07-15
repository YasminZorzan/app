import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as signalR from '@microsoft/signalr';
import { NotificacoesService } from './notificacoes.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

    constructor(private notificacoesService: NotificacoesService,
                private authService: AuthService) { }

    private hubConnection: signalR.HubConnection;

    public initializeConnection(): void {
        this.startConnection();
    }

    private startConnection(): void {
        this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl(`${environment.apiUrl.replace('/api/v1', '/hub')}`, {
                              accessTokenFactory: () =>  this.authService.currentUser?.token
                            })
                            .withAutomaticReconnect()
                            .build();

        this.hubConnection.on('NotificationReceived', (notificacao) => {
            this.notificacoesService.receiveNotificacao(notificacao);
        });

        this.hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch(err => console.log('Error while starting connection: ' + err));
    }
}
