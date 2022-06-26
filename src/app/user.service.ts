import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { User } from './contact/contact.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${environment.baseUrl}/contact`;

  constructor(private httpClient: HttpClient) {
  }

  fetchUser(val: { user: string, password: string }): Observable<User> {
    return this.httpClient.post<User>(`${this.url}`, {
      user: val.user,
      password: val.password
    });
  }
}
