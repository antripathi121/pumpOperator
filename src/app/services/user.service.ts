import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
apiURL = 'https://mqtt8858.herokuapp.com';
 register(userDetail) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post(this.apiURL + `/auth/register/` , userDetail, {headers: headers});
    // .map((res:Response) => res.json());

 }
 login(loginDetail):Observable<any> {
  var headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  // headers.append('x-access-token', token);
  return this.http.post(this.apiURL + `/auth/login/` , loginDetail, {headers: headers})
  // .map((res:Response) => res.json());
  .pipe(
    tap((res) => {
      console.log(res);
    })
  );
 }

 power(state){
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  let body = {'flag': state}
  return this.http.post(this.apiURL + `/mqtt/` , body, {headers: headers});
 }
}
