import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

  public getList(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/produtos`);
  }

}
