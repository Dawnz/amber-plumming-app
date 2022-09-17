import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  // input field taht will accept inputs from database
  @Input()products:any

  // temporary database, database will be binded to component when it is applied to the store and product details section
 

  ngOnInit(): void {
  }

  
}
