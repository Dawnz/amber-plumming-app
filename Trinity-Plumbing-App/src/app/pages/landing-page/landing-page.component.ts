import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  // should be replaced with data from database and splce for only three item
  items=[
    {
      name:'Sinks',
      image:'/assets/sink.png',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing .Lorem ipsum dolor sit amet',
    },
    {
      name:'Faucets',
      image:'/assets/sink.png',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing',
    },
    {
      name:'Bath Tubs',
      image:'/assets/sink.png',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet',
    }
  ]

  ngOnInit(): void {
  }

}
