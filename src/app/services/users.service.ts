import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { ProfileReferenceModel } from '../models/profile-reference.model';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  profiles: ProfileReferenceModel[];

  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  public getProfiles(forceUpdate: boolean = false): Observable<any> {
    return new Observable(observer => {
      if (!this.profiles || forceUpdate) {
        const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
        this.http.get(`${environment.apiUrl}/users/profiles`, { headers: authHeader }).subscribe((result: ProfileReferenceModel[]) => {
          this.profiles = result;
          observer.next(this.profiles);
        });
      } else {
        observer.next(this.profiles);
      }
    });
  }

  public createAccount(model: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users`, model);
  }

  public createProfile(model: any): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.post(`${environment.apiUrl}/users/profiles`, model, { headers: authHeader });
  }

  public setProfile(idProfile: number): Observable<any> {
    return new Observable(observer => {
      const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
      this.http.get(`${environment.apiUrl}/users/profiles/my/${idProfile}`, { headers: authHeader }).subscribe((data: ProfileReferenceModel) => {
        this.auth.setCurrentUser(data);
        observer.next();
      });
    });
  }

  public getMyProfile(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/users/profiles/my/${this.auth.currentUser?.profileId}`, { headers: authHeader });
  }

  public getUserProfile(username: string): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/users/${this.auth.currentUser?.profileId}/profiles/${username}`, { headers: authHeader });
  }

  public pesquisa(q: string, limit: number = 10, offset: number = 0): Observable<any> {
    return new Observable(observer => {
      const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
      this.http.get(`${environment.apiUrl}/users/${this.auth.currentUser?.profileId}/search?q=${q}&limit=${limit}&offset=${offset}`,
                        {observe: 'response', headers: authHeader })
                        .subscribe((response: HttpResponse<any>) => {
        observer.next({ body: response.body, count: parseInt(response.headers.get('x-total-count'), 10)});
      });
    });
  }

  public verificarDadosCadastro(model: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/verificar-cadastro`, model);
  }

  public getProfileEdit(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/users/${this.auth.currentUser?.profileId}/edicao`, { headers: authHeader });
  }

  public editProfile(model: any, file: any): Observable<any> {
    const authHeader = this.ct.getMultiPartAuthorizationHeader({ token: this.auth.currentUser?.token });
    const formData = new FormData();
    formData.append('model', JSON.stringify(model));
    if (file) {
      formData.append('file', file);
    }
    return this.http.put(`${environment.apiUrl}/users/${this.auth.currentUser?.profileId}/edicao`, formData, { headers: authHeader });
  }

  public excluirPerfil(idProfile: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.delete(`${environment.apiUrl}/users/${idProfile}`, { headers: authHeader });
  }

  buscaCEP(cep: any): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  clearProfiles(): void {
    this.profiles = undefined;
  }
}
