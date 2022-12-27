import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-brands',
  templateUrl: './our-brands.component.html',
  styleUrls: ['./our-brands.component.css']
})
export class OurBrandsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    dots: true,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0:{
          items:2
      },
      576:{
          items:3
      },
      768:{
          items:4
      },
      992:{
          items:5
      },
      1200:{
          items:6
      }
  }
}
}
