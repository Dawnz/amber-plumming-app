import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {
  shippingInfo = this.fb.group({
    email : ['' , Validators.required],
    country : ['' , Validators.required],
    firstName : ['' , Validators.required], 
    lastName : ['' , Validators.required], 
    address : ['' , Validators.required],
    apartment : ['' , Validators.required],
    city : ['' , Validators.required],
  })

  shippingInfoSubmit(){
    console.log(this.shippingInfo.value)
  }

  constructor( private fb:FormBuilder) { }


  ngOnInit(): void {
  }

  
  //locations available
  locations:string[]=[
    'Jamaica', 
    'Cuba',
    'Panama'
  ]

}
