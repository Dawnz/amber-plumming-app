import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css'],
})
export class StorePageComponent implements OnInit {
  constructor(private productsApi: ProductService) {}

  ngOnInit(): void {
    this.pageSlice = this.products.slice(0, 6);
    this.productsApi.getAllProducts().subscribe((data) => {
      console.log(data);
    });
  }

  products = [
    {
      name: 'Kitchen Chrome',
      img: 'https://www.ikea.com/us/en/images/products/kallsjoen-pillar-faucet-chrome-plated__0914025_pe783844_s5.jpg?f=s',
      price: 2000,
    },
    {
      name: 'Bathtub',
      img: 'https://images.thdstatic.com/productImages/f31d4d41-70cc-4968-a135-7a975d4f670a/svn/white-hydro-systems-corner-bathtubs-stu5959atow-64_300.jpg',
      price: 1400,
    },
    {
      name: 'Shower Head',
      img: 'https://www.vieffetrade.eu/shop/foto_articoli/Hansgrohe/527023/527023.jpg',
      price: 2500,
    },
    {
      name: 'Kitchen Chrome',
      img: 'https://www.ikea.com/us/en/images/products/kallsjoen-pillar-faucet-chrome-plated__0914025_pe783844_s5.jpg?f=s',
      price: 2000,
    },
    {
      name: 'Bathtub',
      img: 'https://images.thdstatic.com/productImages/f31d4d41-70cc-4968-a135-7a975d4f670a/svn/white-hydro-systems-corner-bathtubs-stu5959atow-64_300.jpg',
      price: 1400,
    },
    {
      name: 'Shower Head',
      img: 'https://www.vieffetrade.eu/shop/foto_articoli/Hansgrohe/527023/527023.jpg',
      price: 2500,
    },

    {
      name: 'Kitchen Chrome',
      img: 'https://www.ikea.com/us/en/images/products/kallsjoen-pillar-faucet-chrome-plated__0914025_pe783844_s5.jpg?f=s',
      price: 2000,
    },
    {
      name: 'Bathtub',
      img: 'https://images.thdstatic.com/productImages/f31d4d41-70cc-4968-a135-7a975d4f670a/svn/white-hydro-systems-corner-bathtubs-stu5959atow-64_300.jpg',
      price: 1400,
    },
    {
      name: 'Shower Head',
      img: 'https://www.vieffetrade.eu/shop/foto_articoli/Hansgrohe/527023/527023.jpg',
      price: 2500,
    },
    {
      name: 'Bathtub',
      img: 'https://images.thdstatic.com/productImages/f31d4d41-70cc-4968-a135-7a975d4f670a/svn/white-hydro-systems-corner-bathtubs-stu5959atow-64_300.jpg',
      price: 1400,
    },
  ];

  pageSlice: any = [];
  //<-------- paginator event -------->
  pageSize(event: any) {
    console.log(event);
    console.log(this.products.length);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.products.length) {
      endIndex = this.products.length;
    }
    this.pageSlice = this.products.slice(startIndex, endIndex);
  }
}
