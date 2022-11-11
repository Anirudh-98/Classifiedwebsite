import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   users: any;
   searchText: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList();
  }
  userList() {
    this.userService.allUsers().subscribe(
      (response) =>{
        console.log(response);
       this.users = response;
      }
    );
  }

}
