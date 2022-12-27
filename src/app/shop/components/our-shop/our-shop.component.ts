import { Component, OnInit } from '@angular/core';
import { Country, COUNTRIES } from '../../models/car.model';

@Component({
  selector: 'app-our-shop',
  templateUrl: './our-shop.component.html',
  styleUrls: ['./our-shop.component.css']
})
export class OurShopComponent implements OnInit {

	page = 1;
	pageSize = 4;
	collectionSize = COUNTRIES.length;
  countries!: Country[];


  constructor() { 
    this.refreshCountries();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /* I should just call my api to give me next page 
    For more details https://ng-bootstrap.github.io/#/components/pagination/overview
  
  */
  refreshCountries() {
		this.countries = COUNTRIES.map((cmd:Country, i:number) => ({Id: i + 1, ...cmd})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
	}
}
