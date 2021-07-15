import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthService } from '../auth/auth.service';
import { Constants } from './constants';

export interface Agendamento {
  id: number
  data: string
  live: any
  aula: {
    id: number
    idProduto: number
    titulo: string
    duracao: number
    descricao: string
    streamLocator: string
    fotoDestaque: string
    professor: string
    qtdAssistidas: number
    wod: any
    dificuldade: any
    tipoAula: string
    usaEquipamento: boolean
    aquecimento: any
    alongamento: any
  }
  agendamentoAssistido: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {
  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  newItem(model: any): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/agendamentos/${this.auth.currentUser?.profileId}`, model, { headers: authHeader });
  }

  getList(dataInicial: Date, dataFinal: Date): Observable<Agendamento[]> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    console.log(authHeader);
    return this.http.get<Agendamento[]>(`${environment.apiUrl}/agendamentos/${this.auth.currentUser?.profileId}?dataInicio=${dataInicial.toISOString()}&DataFim=${dataFinal.toISOString()}`, { headers: authHeader });
  }
}