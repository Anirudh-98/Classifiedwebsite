import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/models/Products';
import { ProductService } from '../_services/product.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  product: Product ={
    productName: "",
    productDescription: "",
    productPrice: 0,
    productModel: "",
    location: "",
    productId: '',
    productImages: []
  }
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute,
    private router:Router,private userAuth:UserAuthService) { }

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
    console.log(this.product);
  }


  editProduct(productId: any){
    this.router.navigate(['/addproduct', {productId: productId}]);
  }

  deleteProduct(productId:any){

    this.productService.deleteProduct(productId).subscribe(
      (resp: any)=>{
        this.product;
      },

    )
  }

  public isLoggedIn() {
    return this.userAuth.isLoggedIN();

  }
}
