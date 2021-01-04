import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  BASE_URL, NAME_KEY, TOKEN_KEY
} from '../../app.config';
@Injectable()

export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  get displayName() {
    return localStorage.getItem(NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  get getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  login(loginData) {
    return this.http.post(BASE_URL + '/auth/user/login', loginData);
  }

  checkAuth(): Observable < boolean > {
    return this.http.get < boolean > (BASE_URL + '/auth/user/checkToken');
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(NAME_KEY);
    this.router.navigate(['/']);
  }

  authenticate(authResponse) {
    if (!authResponse.token) {
      return;
    }
    localStorage.setItem(TOKEN_KEY, authResponse.token);
    localStorage.setItem(NAME_KEY, authResponse.displayName);
    this.router.navigate(['/']);
  }


}
