import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../shared/models/Products';
import { ImageProcessingService } from '../_services/image-processing.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  PRODUCTS: any;
  moreData: any;
  limit = 1;
  isMore = true;
  isLimit!: number;
 searchText: any;
  constructor(private product:ProductService, private router:Router,
    private route: ActivatedRoute, private imageProcessingService:ImageProcessingService) { }

  ngOnInit(): void {
    this.productList();
  }

  productList():void{
    this.product.getAllProducts()
    .pipe(
      map((x: Product[], i: any) =>x.map((product: Product)=> this.imageProcessingService.createImages(product)))
    )
    .subscribe((response)=>{
      this.PRODUCTS =response;
      this.moreData = this.PRODUCTS.slice(0, this.limit * 4);
      console.log(this.PRODUCTS);
      console.log(this.moreData);
    })
  }

   addMore(){
     this.isLimit = this.PRODUCTS.length - 4 * this.limit;
     this.limit += 1;
     this.productList();
     if (this.isLimit >6) {
      this.isMore = true;
     }else{
      this.isMore = false;
     }
   }


  deleteProduct(productId: number){

    this.product.deleteProduct(productId).subscribe(
      (resp: any)=>{
        this.productList();
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
    )
  }

  editProduct(productId: any){
    this.router.navigate(['/addproduct', {productId: productId}]);
  }
  viewProduct(productId: any){
    this.router.navigate(['/productview', {productId: productId}]);
  }

}
