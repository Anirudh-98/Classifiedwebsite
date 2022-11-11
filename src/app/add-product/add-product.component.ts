import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FileHandle } from '../shared/models/file-handle';
import { Product } from '../shared/models/Products';
import { ProductService } from '../_services/product.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   product: Product = {
    productName: "",
    productDescription: "",
    productPrice: 0,
    productModel: "",
    location: "",
    productId: '',
    productImages: []
   }
  constructor(private productService: ProductService,
    private router: Router, private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
  }

  addProduct(productForm: NgForm){

    const productFormData = this.prepareFormData(this.product);
    this.productService.addProduct(productFormData).subscribe(data =>{
      console.log(data);
      this.goToProducts();
    })

  }

  prepareFormData(product: Product): FormData{
    const formData = new FormData();

    formData.append(
      'product',
      new Blob([JSON.stringify(product)], {type: 'application/json'})
    );

    for(var i=0; i< product.productImages.length; i++) {
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      );
    }
    return formData;
  }

  goToProducts(){
    this.router.navigate(['/product'])
  }

 onFileSelected(event: any){
    if(event.target.files){
      const file = event.target.files[0];

      const fileHandle: FileHandle ={
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.product.productImages.push(fileHandle);
    }
 }

 removeImages(i: number) {
    this.product.productImages.splice(i, 1);
 }

 fileDropped(fileHandle: FileHandle){
   this.product.productImages.push(fileHandle);
 }

}
