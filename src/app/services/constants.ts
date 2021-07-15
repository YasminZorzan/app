import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class Constants {
    constructor() {}

    getAuthorizationHeader(user: any): HttpHeaders {
      const headers = new HttpHeaders(
          {'Content-Type': 'application/json',
              Authorization: 'Bearer ' + user.token}
      );
      return headers;
    }

    getMultiPartAuthorizationHeader(user: any): HttpHeaders {
      const headers = new HttpHeaders(
        {
          // 'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + user.token
        }
      );
      return headers;
    }
}
