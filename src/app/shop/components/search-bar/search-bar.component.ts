import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';
import { Office } from '../../models/office.model';
import { VehicleServices } from '../../services/shop.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  offices!: Office[]
  categories!: Category[]

  @Output() locationId = new EventEmitter<string>();
  @Output() categoryId = new EventEmitter<string>();

  @Output() search = new EventEmitter<string[]>();
  constructor(private vehicleServices: VehicleServices) { }

  ngOnInit(): void {
    this.getAllOffices();
    this.getAllCategories();
  }

  getAllOffices() {
    {
      this.vehicleServices.getAllOffices().subscribe({
        next: (resp: any) => {
          //this.offices=resp;
          this.offices = resp.offices;
          //console.log(resp._embedded.offices);
        },
        error: err => {
          console.log(err);
        }
      })

    }
  }

  getAllCategories() {

    this.vehicleServices.getAllCategories().subscribe({
      next: (resp: any) => {
        this.categories = resp._embedded.categories;
      //  console.log(resp._embedded.categories);
      },
      error: err => {
        console.log(err);
      }
    })

  }

  onSelectLocation(selectedLocation: string) {
    console.log(selectedLocation);
    
    this.locationId.emit(selectedLocation)
  }
  onSelectCategory(selectedCategory: string) {
   console.log(selectedCategory);
    this.categoryId.emit(selectedCategory)
  }
  onSearch(minPrice:string,maxPrice:string,name:string,date:string){
    const ListOfEvents=[];
    ListOfEvents.push(minPrice)
    ListOfEvents.push(maxPrice)
    ListOfEvents.push(name)
    ListOfEvents.push(date)
    this.search.emit(ListOfEvents)
    
  }


}
