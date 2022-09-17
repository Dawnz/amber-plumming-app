import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {
  Observable,
  catchError,
  throwError as observableThrowError,
} from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        return observableThrowError(() => err.error.message);
      })
    );
  }
}
