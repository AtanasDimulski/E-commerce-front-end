import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/services/BaseServices/authentication.service';

import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  public jwt: JwtHelperService = new JwtHelperService();
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.auth.isAuthenticated() == true){
        const token = localStorage.getItem('token');
        // decode the token to get its payload
        const tokenPayload = this.jwt.decodeToken(token);
        if(tokenPayload.role != "Admin"){
          this.router.navigate(['/login']);
          return false;
        }
        else{
          return true;
        }
      }
      else{
        localStorage.clear();
        this.router.navigate(['/login']);
        return false;
      }
  }
  constructor(public auth: AuthenticationService, public router: Router) {}
  
  
}