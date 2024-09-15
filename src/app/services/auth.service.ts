import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  login(uname: string, pword: string): number{
    if (uname === "tha" && pword === "123") {
      return 200;
    } else{
      return 403;
    }
  }
  // Here we need to invalidate the token or remove locally stored authentication information
  logout(){
    this.router.navigate(['login']);
  }
}
