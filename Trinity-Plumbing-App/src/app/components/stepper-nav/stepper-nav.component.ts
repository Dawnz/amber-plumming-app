import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-nav',
  template: `
  <div class="shipping-navigation">
            <h4 class="heading">Trinity</h4>
            <!------------- links ------------->
            <ul class="nav">
                <li>Cart</li>
                <i class="fa-solid fa-2x fa-greater-than"></i>
                <li>Information</li>
                <i class="fa-solid fa-greater-than"></i>
                <li>Shipping</li>
                <i class="fa-solid fa-greater-than"></i>
                <li>Payment</li>
            </ul>
        </div>
  `,
  styles: [`
  
.shipping-navigation .heading{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    text-transform: uppercase;
    margin: 0 0 1% 0;
}

.shipping-navigation .nav {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.shipping-navigation .nav li{
    font-family: 'Inter';
    list-style: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin:0px 6px;
    cursor: pointer;
}

.shipping-navigation .nav i{
    font-size: 10px;
   
}
  `]
})
export class StepperNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
