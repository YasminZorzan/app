import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { ProfileReferenceModel } from '../models/profile-reference.model';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {
  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  public getProgramas(limit = 10, offset = 0, q = ''): Observable<any> {
    return new Observable(observer => {
      const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
      this.http.get(`${environment.apiUrl}/programas?q=${q}&limit=${limit}&offset=${offset}`,
                    { observe: 'response', headers: authHeader })
                    .subscribe((response: HttpResponse<any>) => {
                      observer.next({body: response.body, count: parseInt(response.headers.get('x-total-count'), 10)});
                    });
    });
  }

  public getPrograma(idPrograma: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/programas/${this.auth.currentUser?.profileId}/visualizar/${idPrograma}`, { headers: authHeader });
  }

  public getConclusoes(idPrograma: number, limit = 10, offset = 0): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/programas/${idPrograma}/conclusoes?limit=${limit}&offset=${offset}`, { headers: authHeader });
  }
}
