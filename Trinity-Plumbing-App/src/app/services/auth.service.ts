import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../interfaces/api-response';
import { User, UserResponse } from '../interfaces/user';
const AUTH_DATA = 'user-Login';
const AUTH_ROUTE = `${environment.baseUrl}/auth/login`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subject = new BehaviorSubject<UserResponse | null>(null);
  user$: Observable<UserResponse | null> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  token$: Observable<string | undefined>;

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));
    this.token$ = this.user$.pipe(map((user) => user?.accessToken));
    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }
  login(credentials: User): Observable<APIResponse<UserResponse>> {
    return this.http
      .post<APIResponse<UserResponse>>(AUTH_ROUTE, {
        // TODO. implement login
        email: credentials.email,
        password: credentials.password,
      })
      .pipe(
        tap((user) => {
          this.subject.next(user.data);

          localStorage.setItem(AUTH_DATA, JSON.stringify(user.data));
        })
      );
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
    this.router.navigateByUrl('/login');
  }
}
