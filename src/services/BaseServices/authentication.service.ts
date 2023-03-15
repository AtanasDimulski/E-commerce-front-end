import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import endPoints from '../endpoints';
import { Observable } from 'rxjs';
import { Customer } from 'src/models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currCustomer:Customer;
  constructor(private http: HttpClient) { }
  public jwt: JwtHelperService = new JwtHelperService();
  token:string;
  Register(formdata):Observable<string>{
    return this.http.post<string>(
      endPoints.register,
      formdata
    );
    }

    LogIn(formdata){
     return this.http.post(
        endPoints.logIn,
        formdata,
        {responseType: 'text'}
      );
      
      }

      public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !this.jwt.isTokenExpired(token);
      }
    
      public getUser(mail):Observable<Customer>{
        const headersreq = new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        });
        return this.http.get<Customer>(
          endPoints.getUser + mail,
          {headers:headersreq}
        );
      }
}
