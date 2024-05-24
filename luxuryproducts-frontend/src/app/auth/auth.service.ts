import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from './auth-response.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthRequest } from './auth-request.model';
import { TokenService } from './token.service';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_url = environment.base_url;
  private _loginEndpoint: string = this.base_url + '/auth/login';
  private _registerEndpoint: string = this.base_url + '/auth/register';

  public $userIsLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public $userIsAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private tokenService: TokenService) {
    if (this.tokenService.isValid()) {
      this.$userIsLoggedIn.next(true);
      this.$userIsAdmin.next(this.isAdmin());
    }
  }

  private isAdmin(): boolean {
    const token = this.tokenService.loadToken();
    if (token) {
      const payload = this.tokenService.getPayload(token).email;
      return payload === 'admin@email.com'
    }
    return false;
  }

  public login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(this._loginEndpoint, authRequest)
      .pipe(
        tap((authResponse: AuthResponse) => {
          this.tokenService.storeToken(authResponse.token);
          this.$userIsLoggedIn.next(true);
          this.$userIsAdmin.next(this.isAdmin());
        })
      );
  }

  public register(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(this._registerEndpoint, authRequest)
      .pipe(
        tap((authResponse: AuthResponse) => {
          this.tokenService.storeToken(authResponse.token);
          this.$userIsLoggedIn.next(true);
          this.$userIsAdmin.next(this.isAdmin());
        })
      );
  }

  public getCurrentUserId(): string {
    const token = this.tokenService.loadToken();
    if (token) {
      return this.tokenService.getPayload(token).email;
    }
    return '';
  }

  public logOut(): void {
    this.tokenService.removeToken();
    this.$userIsLoggedIn.next(false);
    this.$userIsAdmin.next(false);
  }
}