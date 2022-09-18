import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productsApi: ProductService) { }
  products: Product[] = [];

  ngOnInit(): void {
    this.productsApi.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  minus(amount:any){
    amount = Number(amount.innerText--)
  }

  plus(amount:any){
    amount = Number(amount.innerText++)
  }
}
