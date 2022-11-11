import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Product } from '../shared/models/Products';
import { ImageProcessingService } from './image-processing.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductViewService implements Resolve<Product> {

  constructor(private productservice:ProductService,
    private imageProcessingService: ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Product>{
   const id = route.paramMap.get("productId");

   if(id){
      return this.productservice.getProductById(id)
      .pipe(
        map(p => this.imageProcessingService.createImages(p) )
      );
   }
   else{
      return of(this.getProductDetails());
   }

  }
  getProductDetails(){
    return{
    productName: "",
    productDescription: "",
    productPrice: 0,
    productModel: "",
    location: "",
    productId: '',
    productImages: [],

    }
  }
}
