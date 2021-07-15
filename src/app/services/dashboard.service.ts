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
export class DashboardService {

  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  public getTotais(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/dashboard/totais`, { headers: authHeader });
  }

  public getPlanos(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/dashboard/planos`, { headers: authHeader });
  }

  public getAulas(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/dashboard/aulas`, { headers: authHeader });
  }
}
