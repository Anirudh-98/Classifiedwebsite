import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../shared/models/Products';
import { User } from '../shared/models/User';

import { ImageProcessingService } from '../_services/image-processing.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    message: any;
    list: any;
    items: any;
  constructor(private userservice:UserService, public userAuth:UserAuthService,
    private imageProcessingService:ImageProcessingService, private router:Router) { }

  ngOnInit(): void {
    // this.forUser();
     this.activeUser();
  }

  // forUser() {
  //   this.userservice.forUser().subscribe(
  //      (response) =>{
  //       console.log(response);
  //       this.message = response;
  //      }
  //   );
  // }

  public activeUser() {
    this.userservice.getUserById(this.userAuth.getUser()).subscribe(
      (response) =>{
        console.log(response);
        this.list = response;
        this.items = this.list.userProduct;
      }
    );
    }

    viewProduct(productId: any){
      this.router.navigate(['/productview', {productId: productId}]);
    }

}
