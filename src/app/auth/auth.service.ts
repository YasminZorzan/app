import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../services/constants';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Profile } from '../models/profile.model';
import { environment } from 'src/environments/environment';
import { ProfileReferenceModel } from '../models/profile-reference.model';

@Injectable()
export class AuthService {
  
  currentUser?: Profile = this.storage.get('currentUser') || undefined;

  constructor(public jwtHelper: JwtHelperService,
              private http: HttpClient,
              public ct: Constants,
              @Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public isAuthenticated(): boolean {
    if (!this.currentUser) {
      return false;
    }
    return !this.jwtHelper.isTokenExpired(this.currentUser.token);
  }

  public init(): Observable<any> {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser) {
      if (this.jwtHelper.isTokenExpired(this.currentUser.token)) {
        return this.refreshToken();
      } else {
        return new Observable(observer => { observer.next(true); });
      }
    } else {
      return new Observable(observer => { observer.next(false); });
    }
  }

  refreshToken(): Observable<boolean> {
    return new Observable(observer => {
      if (this.currentUser && this.jwtHelper.isTokenExpired(this.currentUser.token)) {
        const model = {
          token: this.currentUser.token,
          refreshToken: this.currentUser.refreshToken
        };
        const authHeader = this.ct.getAuthorizationHeader(this.currentUser);
        this.http.post(`${environment.apiUrl}/Authenticate/refresh`, model, {headers: authHeader }).subscribe((result: any) => {
          if (result && this.currentUser) {
            this.currentUser.token = result.auth_token;
            this.currentUser.refreshToken = result.refresh_token;
            this.storage.set('currentUser', this.currentUser);
            observer.next(true);
          }
        }, error => {
          this.logout();
          observer.next(false);
        });
      } else {
        observer.next(false);
      }
    });
  }

  public login(credentials: any): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${environment.apiUrl}/Authenticate/login`, credentials).subscribe((data: any) => {
        const tokenProd = this.jwtHelper.decodeToken(data.auth_token).produtos;
        const produtos = this.parseProduct(tokenProd);
        this.currentUser = new Profile(data.id, data.auth_token, data.refresh_token, data.roles, produtos);
        this.storage.set('currentUser', this.currentUser);
        observer.next(true);
      }, error => {
        observer.next(error.error.data);
      });
    });
  }

  appleSignIn(token: any): Observable<any> {
    return new Observable(observer => {
      const authHeader = this.ct.getAuthorizationHeader({ token });
      this.http.post(`${environment.apiUrl}/Authenticate/apple-signin-response`, {}, { headers: authHeader }).subscribe((data: any) => {
        const tokenProd = this.jwtHelper.decodeToken(data.auth_token).produtos;
        const produtos = this.parseProduct(tokenProd);
        this.currentUser = new Profile(data.id, data.auth_token, data.refresh_token, data.roles, produtos);
        this.storage.set('currentUser', this.currentUser);
        observer.next(true);
      }, error => {
        observer.next(false);
      });
    });
  }

  public externalLogin(accessToken: string, provider: string): Observable<any> {
    return new Observable(observer => {
      const model = {
        accessToken,
        provider
      };
      this.http.post(`${environment.apiUrl}/Authenticate/external-login`, model).subscribe((data: any) => {
        const tokenProd = this.jwtHelper.decodeToken(data.auth_token).produtos;
        const produtos = this.parseProduct(tokenProd);
        this.currentUser = new Profile(data.id, data.auth_token, data.refresh_token, data.roles, produtos);
        this.storage.set('currentUser', this.currentUser);
        observer.next(true);
      }, error => {
        observer.error(error);
      });
    });
  }

  private parseProduct(obj): number[] {
    let result: number[] = [];
    if (obj) {
      if (Array.isArray(obj)) {
        result = obj.map(p => parseInt(p, 10));
      } else {
        result.push(parseInt(obj, 10));
      }
    }
    return result;
  }

  public lembrarSenha(model: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/authenticate/forgot-password`, model);
  }

  public recuperarSenha(model: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/authenticate/reset-password`, model);
  }

  public trocarSenha(model: any): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader(this.currentUser);
    return this.http.post(`${environment.apiUrl}/authenticate/change-password`, model, { headers: authHeader });
  }

  public getVideoUploadToken(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader(this.currentUser);
    return this.http.get(`${environment.apiUrl}/authenticate/video-upload-sas-token`, { headers: authHeader });
  }

  public getCurrentUser(): Profile | undefined {
    return this.currentUser;
  }

  public setCurrentUser(profile: ProfileReferenceModel): void {
    this.currentUser.id = profile.idUsuario;
    this.currentUser.profileId = profile.idProfile;
    this.currentUser.nome = profile.nome;
    this.currentUser.foto = profile.foto;
    this.currentUser.username = profile.username;
    this.currentUser.email = profile.email;
    this.currentUser.localizacao = profile.localizacao;
    this.storage.set('currentUser', this.currentUser);
  }

  public logout(): Observable<boolean> {
    return new Observable(observer => {
      this.storage.clear();
      this.currentUser = undefined;
      observer.next(true);
      observer.complete();
    });
  }
}
