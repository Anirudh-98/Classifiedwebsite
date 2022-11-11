import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private userService:UserService, private router: Router ) { }

  ngOnInit(): void {
  }
  createAccount(createForm: any){
    this.userService.createUser(createForm.value).subscribe(
      (response) =>{
        console.log(response);
        this.redirectToLogin();
      }
    );
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }
}
