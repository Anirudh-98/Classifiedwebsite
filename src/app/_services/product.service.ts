import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );
  httpClient: any;
  constructor(private http:HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/all",{headers: this.requestHeader});
  }

  public addProduct(product : FormData): Observable<Product> {
    return this.http.post<Product>("http://localhost:8080/addNewProduct", product);
  }
  public getProductById(productId: string){
    return this.http.get<Product>("http://localhost:8080/getProductDetailsById/" + productId,{headers: this.requestHeader});
  }

  public deleteProduct(productId : number){
    // return this.http.delete(`${this.apiUrl}deleteProduct/${productId}`);
    return this.http.delete("http://localhost:8080/deleteProduct/"+ productId);
  }
}
