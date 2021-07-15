import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NivelDificuldade } from '../models/nivel-dificuldade.model';
import { AuthService } from '../auth/auth.service';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class NiveisDificuldadeService {

  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  public getList(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/niveis-dificuldade`, { headers: authHeader });
  }

  public getItem(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/niveis-dificuldade/${id}`, { headers: authHeader });
  }

  public deleteItem(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.delete(`${environment.apiUrl}/niveis-dificuldade/${id}`, { headers: authHeader });
  }

  public newItem(model: NivelDificuldade): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/niveis-dificuldade`, model, { headers: authHeader });
  }

  public changeItem(model: NivelDificuldade): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.put(`${environment.apiUrl}/niveis-dificuldade`, model, { headers: authHeader });
  }
}
