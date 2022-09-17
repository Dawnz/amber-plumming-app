import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, tap, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../interfaces/api-response';
import { User } from '../interfaces/user';
const AUTH_DATA = 'user-Login';
const AUTH_ROUTE = `${environment.baseUrl}/auth/login`;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));
    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }
  login(credentials: User): Observable<APIResponse<User>> {
    return this.http
      .post<APIResponse<User>>(AUTH_ROUTE, {
        // TODO. implement login
        email: credentials.email,
        password: credentials.password,
      })
      .pipe(
        tap((user) => {
          this.subject.next(user.data);
          console.log(user.status);

          localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }),
        shareReplay()
      );
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
    this.router.navigateByUrl('/login');
  }
}
