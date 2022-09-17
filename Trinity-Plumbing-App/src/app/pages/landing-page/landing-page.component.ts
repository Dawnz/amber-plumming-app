import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  // should be replaced with data from database and spliced for only three items
  items=[
    {
      name:'Shower Head',
      img:'https://www.vieffetrade.eu/shop/foto_articoli/Hansgrohe/527023/527023.jpg',
      price: 2500
    },
   
    {
      name:'Kitchen Chrome',
      img:'https://www.ikea.com/us/en/images/products/kallsjoen-pillar-faucet-chrome-plated__0914025_pe783844_s5.jpg?f=s',
      price:2000
    },
    {
      name:'Bathtub',
      img:'https://images.thdstatic.com/productImages/f31d4d41-70cc-4968-a135-7a975d4f670a/svn/white-hydro-systems-corner-bathtubs-stu5959atow-64_300.jpg',
      price: 1400
    },
  ]

  ngOnInit(): void {
  }

}
