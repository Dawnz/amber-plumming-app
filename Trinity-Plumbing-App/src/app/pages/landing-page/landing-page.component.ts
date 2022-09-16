import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  items=[
    {
      name:'Sinks',
      image:'/assets/sink.png',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing....',
    },
    {
      name:'Faucets',
      image:'/assets/sink.png',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing....',
    },
    {
      name:'Bath Tubs',
      image:'/assets/sink.png',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing....',
    }
  ]

  ngOnInit(): void {
  }

}
