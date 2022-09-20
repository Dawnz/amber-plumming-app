import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  token: string = '';
  constructor(private auth: AuthService, private router: Router) {
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

    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigateByUrl('/login');
          }
        }
        return throwError(() => err);
      })
    );
  }
}
