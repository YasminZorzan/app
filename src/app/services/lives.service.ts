import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Constants } from './constants';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class LivesService {
  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient, private user: UsersService) { }

  newItem(model: any, file: any): Observable<any> {
    const authHeader = this.ct.getMultiPartAuthorizationHeader({ token: this.auth.currentUser?.token });
    const formData = new FormData();
    formData.append('model', JSON.stringify(model));
    if (file) {
      formData.append('file', file);
    }
    return this.http.post(`${environment.apiUrl}/lives`, formData, { headers: authHeader });
  }

  changeItem(model: any, file: any): Observable<any> {
    const authHeader = this.ct.getMultiPartAuthorizationHeader({ token: this.auth.currentUser?.token });
    const formData = new FormData();
    formData.append('model', JSON.stringify(model));
    if (file) {
      formData.append('file', file);
    }
    return this.http.put(`${environment.apiUrl}/lives`, formData, { headers: authHeader });
  }

  getLive(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/lives/${id}`, { headers: authHeader });
  }

  getLiveAdmin(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/lives/${id}/admin`, { headers: authHeader });
  }

  pesquisar(model: any, order = 'recentes', limit = 2, offset = 0): Observable<any> {
    return new Observable(observer => {
      const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
      this.http.post(`${environment.apiUrl}/lives/${this.auth.currentUser?.profileId}/pesquisa?order=${order}&limit=${limit}&offset=${offset}`,
                        model,
                        {observe: 'response', headers: authHeader })
                        .subscribe((response: HttpResponse<any>) => {
        observer.next({ body: response.body, count: parseInt(response.headers.get('x-total-count'), 10)});
      });
    });
  }


  getListAdmin(limit = 20, offset = 0): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/lives/admin?limit=${limit}&offset=${offset}`, {observe: 'response', headers: authHeader });
  }

  previewLive(idLive: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/lives/Preview/${idLive}`, {}, {observe: 'response', headers: authHeader });
  }

  startLive(idLive: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/lives/Start/${idLive}`, {}, {observe: 'response', headers: authHeader });
  }

  stopLive(idLive: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/lives/Stop/${idLive}`, {}, {observe: 'response', headers: authHeader });
  }
}
