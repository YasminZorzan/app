import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wod } from '../models/wod.model';
import { AuthService } from '../auth/auth.service';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class TiposTutorialService {

  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  public getList(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/tipos-tutorial`, { headers: authHeader });
  }

  public getItem(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/tipos-tutorial/${id}`, { headers: authHeader });
  }

  public deleteItem(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.delete(`${environment.apiUrl}/tipos-tutorial/${id}`, { headers: authHeader });
  }

  public newItem(model: Wod): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/tipos-tutorial`, model, { headers: authHeader });
  }

  public changeItem(model: Wod): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.put(`${environment.apiUrl}/tipos-tutorial`, model, { headers: authHeader });
  }
}
