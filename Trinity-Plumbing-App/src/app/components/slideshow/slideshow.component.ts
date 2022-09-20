import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  template: `
  <div class="outer-container">
    <div class="slide-container" *ngFor="let picture of pictures; let i = index" >
     
    <!---------- div for each item and info ---------->
    <div [ngClass]="{ 'active': selectedIndex === i}"  class="itemsContainer fade">   
      <img src="{{picture}}" alt="" width="100%"> 
    </div>
      
    </div>
      <!----------  manipulation buttons for slide show  ---------->
      <span class="prev click" (click)="prevBut()"><img src="/assets/prevButton.png"></span>
      <span class="next click" (click)="nextBut()"><img src="/assets/nextButton.png"></span>   
  </div>  
  `
  ,
  styles: [
    `
    .itemsContainer{
      display : none;
    }

    .outer-container{
      position : relative;
    }

    .active{
      display :block;
      height: 80vh;
      position: relative;
      clip-path: inset(0);
    }

    .active img{
      object-fit: cover;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .click{
      position : absolute;
      top : 50%;
      transform: translateY(-50%);
      cursor : pointer;
    }

    .prev{
      left : 2%
    }

    .next{
      right : 2%
    }

    .fade{
      animation-name : fade;
      animation-duration : 1.5s;
    }

    @keyframes fade{
      from {
        opacity : 0.9;
      }

      to{
        opacity : 1
      }
    }
    `
  ]
})
export class SlideshowComponent implements OnInit {
 
 //<--------- variables used to manipulate slideshow ---------> 
 @Input() slideInterval = 5000; //5 seconds
 @Input() autoSlide = false;
 @Input() selectedIndex = 0 ;

 constructor() { }
 ngOnDestroy(): void {
  this.autoSlide = false
 }

 //<--------- array for storing cars from database --------->
 pictures:string[] = [
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
   'https://images.unsplash.com/photo-1454988501794-2992f706932e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
   'https://images.unsplash.com/photo-1543674892-7d64d45df18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80',
 ] 

 //prev button for slideshow
 prevBut():void{
   if(this.selectedIndex === 0){
     this.selectedIndex = this.pictures.length - 1
   }
   else{
     this.selectedIndex --
   }
   console.log(this.selectedIndex)
 }

  //next button for slideshow
 nextBut():void{
   if(this.selectedIndex === this.pictures.length - 1){
     this.selectedIndex = 0
   }

   else{
     this.selectedIndex ++
   }

   console.log(this.selectedIndex)
 }

 ngOnInit(): void {
 
   if(this.autoSlide){
     this.autoSlider()
   }
 }

 ngAfterContentInit(): void {
   
 }

 autoSlider(): void{
   setInterval(()=>{
     this.nextBut();
   }, this.slideInterval)
 }

}
