import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-shop',
  templateUrl: './our-shop.component.html',
  styleUrls: ['./our-shop.component.css']
})
export class OurShopComponent implements OnInit {

  constructor() { }
  cars!:[]

  ngOnInit(): void {
  }

}
