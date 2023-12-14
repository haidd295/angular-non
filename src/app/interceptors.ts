import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Interceptor');
    const token = 'mytoken lkjq2;l3kj4l2qkjsdv;dl-238402842038';
    const headers = new HttpHeaders()
      .set('access-token', token)
      .set('Authorization', 'Bearer ' + token);
    const AuthRequest = request.clone({ headers: headers });
    return next.handle(AuthRequest);
  }
}
