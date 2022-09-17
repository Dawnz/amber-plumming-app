import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  token: string = '';
  constructor(private auth: AuthService) {
    this.auth.token$.subscribe((result) => {
      if (result) {
        this.token = result;
      } else {
        this.token = '';
      }
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `bearer ${this.token !== '' && this.token}`,
      },
    });
    console.log(req.headers);

    return next.handle(req);
  }
}
