import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plano } from '../models/plano.model';
import { AuthService } from '../auth/auth.service';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  public getList(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/faq`, { headers: authHeader });
  }

  public getListAdmin(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/faq/admin`, { headers: authHeader });
  }

  public getItem(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/faq/${id}`, { headers: authHeader });
  }

  public deleteItem(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.delete(`${environment.apiUrl}/faq/${id}`, { headers: authHeader });
  }

  public newItem(model: Plano): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/faq`, model, { headers: authHeader });
  }

  public changeItem(model: Plano): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.put(`${environment.apiUrl}/faq`, model, { headers: authHeader });
  }
}
