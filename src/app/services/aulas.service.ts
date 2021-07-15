import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AulasService {
  aulasFavoritas: number[] = [];

  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  newItem(model: any, file: any): Observable<any> {
    const authHeader = this.ct.getMultiPartAuthorizationHeader({ token: this.auth.currentUser?.token });
    const formData = new FormData();
    formData.append('model', JSON.stringify(model));
    if (file) {
      formData.append('file', file);
    }
    return this.http.post(`${environment.apiUrl}/aulas`, formData, { headers: authHeader });
  }

  changeItem(model: any, file: any): Observable<any> {
    const authHeader = this.ct.getMultiPartAuthorizationHeader({ token: this.auth.currentUser?.token });
    const formData = new FormData();
    formData.append('model', JSON.stringify(model));
    if (file) {
      formData.append('file', file);
    }
    return this.http.put(`${environment.apiUrl}/aulas`, formData, { headers: authHeader });
  }

  pesquisar(model: any, order = 'recentes', limit = 10, offset = 0): Observable<any> {
    return new Observable(observer => {
      const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
      this.http.post(`${environment.apiUrl}/aulas/pesquisa?order=${order}&limit=${limit}&offset=${offset}`,
                        model,
                        {observe: 'response', headers: authHeader })
                        .subscribe((response: HttpResponse<any>) => {
        observer.next({ body: response.body, count: parseInt(response.headers.get('x-total-count'), 10)});
      });
    });
  }

  getAulaAdmin(idAula: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/aulas/${idAula}/admin`, { headers: authHeader });
  }

  getListAdmin(limit = 20, offset = 0): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/aulas/admin?limit=${limit}&offset=${offset}`, {observe: 'response', headers: authHeader });
  }

  getAula(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/aulas/${id}`, { headers: authHeader });
  }

  postAulaAssistida(model: any): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/aulas/${this.auth.currentUser?.profileId}/assistir`, model, { headers: authHeader });
  }

  postFavoritarAula(model: any): void {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    this.http.post(`${environment.apiUrl}/aulas/${this.auth.currentUser?.profileId}/favoritar`, model, { headers: authHeader }).subscribe(() => {
      const index = this.aulasFavoritas.indexOf(model.idAula, 0);
      if (index > -1) {
        this.aulasFavoritas.splice(index, 1);
      } else {
        this.aulasFavoritas.unshift(model.idAula);
      }
    });
  }

  isAulaFavorita(idAula: number): boolean {
    return this.aulasFavoritas.indexOf(idAula, 0) > -1;
  }

  getAulasFavoritas(): void {
    if (this.auth.currentUser && this.auth.currentUser?.profileId !== -1) {
      const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
      this.http.get(`${environment.apiUrl}/aulas/${this.auth.currentUser?.profileId}/favoritas`, { headers: authHeader }).subscribe((result: number[]) => {
        this.aulasFavoritas = result;
      });
    }
  }

  getAulasFavoritasDetalhes(limit = 10, offset = 0): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/aulas/${this.auth.currentUser?.profileId}/favoritas/detalhes?limit=${limit}&offset=${offset}`, { headers: authHeader });
  }

  clearAulasFavoritas(): void {
    this.aulasFavoritas = [];
  }

  getAulasAssistidas(concluidas?: boolean, limit = 10, offset = 0): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/aulas/${this.auth.currentUser?.profileId}/assistidas?limit=${limit}&offset=${offset}${concluidas !== undefined ? `&concluidas=${concluidas}` : ''}`, { headers: authHeader });
  }

  getAulasAssistidasTop(limit = 10, offset = 0): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/aulas/${this.auth.currentUser?.profileId}/assistidas/top?limit=${limit}&offset=${offset}`, { headers: authHeader });
  }
}
