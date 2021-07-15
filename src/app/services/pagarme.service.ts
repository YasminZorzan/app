import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagarMeService {
  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.pagar.me/1';
  headers = new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
  );

  getCardHash(): Observable<Object> {
    return new Observable(observer => {
      this.http.get(`${this.baseUrl}/transactions/card_hash_key?encryption_key=${environment.gatewayEK}`, { headers: this.headers })
        .subscribe((data: Object) => {
          observer.next(data);
        });
    });
  }
}
