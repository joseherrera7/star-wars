import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { JwtResponse } from './jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private _router: Router) { }

  authSubject = new BehaviorSubject(false);

  signIn(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${environment.server}/user`, user).pipe(
      tap(async (res: JwtResponse) => {

        if (res != undefined) {
          this.authSubject.next(true);
          return res;
        } else {
          alert('Usuario incorrecto');
        }
      })
    );
  }

  isAuthenticated() {
    return this.authSubject.asObservable();
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['/login'])
  }

  public get logIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }

}
