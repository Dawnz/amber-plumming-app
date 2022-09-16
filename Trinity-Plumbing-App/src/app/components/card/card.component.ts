import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  // input field taht will accept inputs from database
  @Input()product:any

  ngOnInit(): void {
  }

}
