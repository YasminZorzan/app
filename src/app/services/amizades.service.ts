import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { ProfileReferenceModel } from '../models/profile-reference.model';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AmizadesService {
  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  pesquisaSolicitacao(model: any): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/amizades/${this.auth.currentUser?.profileId}/pesquisa-solicitacao`, model, { headers: authHeader });
  }

  responderSolicitacao(idSolicitacao, model: any): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/amizades/${this.auth.currentUser?.profileId}/solicitacao/resposta/${idSolicitacao}`, model, { headers: authHeader });
  }

  removerAmizade(model: any): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/amizades/${this.auth.currentUser?.profileId}/remover`, model, { headers: authHeader });
  }

  getAmizades(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/amizades/${this.auth.currentUser?.profileId}`, { headers: authHeader });
  }

  solicitarAmizade(model: any): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/amizades/${this.auth.currentUser?.profileId}/solicitacao`, model, { headers: authHeader });
  }
}
