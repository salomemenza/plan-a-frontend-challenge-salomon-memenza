import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getToken() {
    return this.http.get<User>(`${environment.baseUrl}/authentication/token/new?api_key=${environment.apiKey}`)
  }


  public login = (request_token) : Observable<any>  => {
    let username: string = environment.username;
    let password: string = environment.password;

    return this.http.post<any>(`${environment.baseUrl}/authentication/token/validate_with_login?api_key=${environment.apiKey}`, { username, password,request_token })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }
}
