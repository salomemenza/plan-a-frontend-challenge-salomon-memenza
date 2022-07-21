import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getToken = (): Observable<any> => {
    /*const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let httpOptions = {
      headers: headers
    };*/
    return this.http.get<Object[]>(`${environment.baseUrl}/authentication/token/new?api_key=${environment.apiKey}`)
  }


  login = (request_token) : Observable<any>  => {
    let username: string = environment.username;
    let password: string = environment.password;

    return this.http.post<any>(`${environment.baseUrl}/authentication/token/validate_with_login?api_key=${environment.apiKey}`, { username, password,request_token })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        //this.userSubject.next(user);
        return user;
      }));
  }
}
