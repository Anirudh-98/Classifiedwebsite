import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/User';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:8080";

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );
  constructor(private httpclient: HttpClient, private userAuth: UserAuthService) { }

  public login(loginData: FormData) {
    return this.httpclient.post(this.PATH_OF_API + "/authenticate", loginData, { headers: this.requestHeader });
  }

  public createUser(User: FormData): Observable<User>{
    return this.httpclient.post<User>(this.PATH_OF_API + "/registerNewUser",User, {headers: this.requestHeader});
  }

  public getUserById(UserName: string) {
    return this.httpclient.get<User>("http://localhost:8080/getUserById/" + UserName);
  }

  // public relateUser(ProductId: string, userName:string) {
  //   return this.httpclient.put("http://localhost:8080/"+ userName +"/products/" + ProductId,{headers:this.requestHeader});
  // }
  public allUsers(){
    return this.httpclient.get(this.PATH_OF_API + "/allUsers");
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + "/forUser", { responseType: "text" });
  }

  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + "/forAdmin", { responseType: "text" });
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuth.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {

          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    } return isMatch;
  }

}
