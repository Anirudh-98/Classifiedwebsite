import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(){
   return JSON.parse( localStorage.getItem('roles') as string);
  }

   public setUser(userName: string){
     localStorage.setItem('userName', userName);
   }

   public getUser(): string {
    return localStorage.getItem('userName') as string;
   }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken') as string;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIN() {
    return this.getRoles() && this.getToken();
  }


}
