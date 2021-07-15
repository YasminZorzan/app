import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
// import { AuthService } from '../auth/auth.service';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class InstrutoresService {
  
  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  public getInstrutores(limit = 10, offset = 0, q = ''): Observable<any> {
    return new Observable(observer => {
      const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
      this.http.get(`${environment.apiUrl}/instrutores?q=${q}&limit=${limit}&offset=${offset}`,
                    { observe: 'response', headers: authHeader })
                    .subscribe((response: HttpResponse<any>) => {
                      observer.next({body: response.body, count: parseInt(response.headers.get('x-total-count'), 10)});
                    });
    });
  }

  public getInstrutor(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/instrutores/${id}`, { headers: authHeader });
  }

  public getItemAdmin(id: number): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/instrutores/${id}/admin`, { headers: authHeader });
  }

  public getInstrutoresReference(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/instrutores/list`, { headers: authHeader });
  }

  public getInstrutoresAdmin(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    return this.http.get(`${environment.apiUrl}/instrutores/admin`, { headers: authHeader });
  }

  newItem(model: any, file: any): Observable<any> {
    const authHeader = this.ct.getMultiPartAuthorizationHeader({ token: this.auth.currentUser?.token });
    const formData = new FormData();
    formData.append('model', JSON.stringify(model));
    if (file) {
      formData.append('file', file);
    }
    return this.http.post(`${environment.apiUrl}/instrutores`, formData, { headers: authHeader });
  }

  changeItem(model: any, file: any): Observable<any> {
    const authHeader = this.ct.getMultiPartAuthorizationHeader({ token: this.auth.currentUser?.token });
    const formData = new FormData();
    formData.append('model', JSON.stringify(model));
    if (file) {
      formData.append('file', file);
    }
    return this.http.put(`${environment.apiUrl}/instrutores`, formData, { headers: authHeader });
  }
}
