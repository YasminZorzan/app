import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Constants } from '../services/constants';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private ct: Constants) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // if (error.status === 401) {
        //   this.auth.refreshToken().subscribe(result => {
        //     if (result) {
        //       this.signalR.startConnection();
        //       const newHeader = this.ct.getAuthorizationHeader(this.auth.currentUser);
        //       const newRequest  = request.clone({
        //         headers: newHeader
        //       });
        //       return next.handle(newRequest);
        //     } else {
        //       return throwError(error);
        //     }
        //   });
        // } else {
          return throwError(error);
        // }
      })
    );
  }
}
