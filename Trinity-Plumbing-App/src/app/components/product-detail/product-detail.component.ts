import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  minus(amount:any){
    amount = Number(amount.innerText--)
  }

  plus(amount:any){
    amount = Number(amount.innerText++)
  }
}
