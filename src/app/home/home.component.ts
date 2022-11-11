import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../shared/models/Products';
import { ImageProcessingService } from '../_services/image-processing.service';
import { ProductService } from '../_services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  PRODUCTS: any;
  moreData: any;
  limit = 1;
  isMore = true;
  isLimit!: number;
 searchText: any;
  image = "./favicon";


  constructor(private product:ProductService, private router:Router,
    private route: ActivatedRoute, private imageProcessingService:ImageProcessingService) { }

  ngOnInit(): void {

  }




}
