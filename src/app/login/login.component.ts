import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user: any;
  constructor(private userService: UserService, private userAuth:UserAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    this.userService.login(loginForm.value).subscribe(
      (response: any)=>{
        console.log(response);
        this.userAuth.setRoles(response.user.role);
        this.userAuth.setToken(response.jwtToken);
        this.user = this.userAuth.setUser(response.user.userName);
        const role = response.user.role[0].roleName;

        if(role === 'Admin'){
          this.router.navigate(['/admin']);
        }else {
          this.router.navigate(['/user']);
        }
      }
    );
  }

}
