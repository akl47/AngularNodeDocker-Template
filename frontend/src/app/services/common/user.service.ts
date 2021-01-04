import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/common/user.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUserByID(): Observable < User > {
    return this.http.get < User > (BASE_URL + '/auth/user/');
  }
  updateUser(user): Observable < User > {
    console.log('Update User:', user)
    return this.http.put < User > (BASE_URL + '/auth/user/' + user.id, user);
  }
}
