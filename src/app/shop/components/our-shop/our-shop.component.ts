import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleServices } from '../../services/shop.service';

@Component({
  selector: 'app-our-shop',
  templateUrl: './our-shop.component.html',
  styleUrls: ['./our-shop.component.css']
})
export class OurShopComponent implements OnInit {

  offset = 0;// which page
  pageSize = 6;

  vehicles !: Vehicle[]
  vehiclesShown!: Vehicle[]
  collectionSize: number = 5;
  // collectionSizes = this.vehicles.length;

  constructor(private vehicleServices: VehicleServices) {
    //this.refreshCountries();
  }
  ngOnInit(): void {
    this.getAllVehicles()
    //    this.collectionSize = this.vehicles.length
  }

  getAllVehicles() {
    this.vehicleServices.getAllVehicles().subscribe({
      next: resp => {
        this.vehicles = resp;
        console.log(this.vehicles);
      },
      error: err => {
        console.log(err);
      },
      complete : ()=>{
        this.refreshCountries()
      }
    })
  }
  findVehiclesByLocations(officeId: string) {
    if (officeId == "0") {
      console.log("ddddddddddddddddddddddddd");
      
      this.getAllVehicles()
     
    } else {
      this.vehicleServices.getAllVehiclesByLocation(officeId).subscribe({
        next: resp => {
          this.vehicles = resp
          this.refreshCountries()
        },
        error: err => {
          console.log(err);
        }
      })
    }

  }

  /* I should just call my api to give me next page 
    For more details https://ng-bootstrap.github.io/#/components/pagination/overview
  
  */
  refreshCountries() {
    if (this.vehicles) {
      this.vehiclesShown = this.vehicles
        .map((cmd: Vehicle, i: number) => ({ Id: i + 1, ...cmd }))
        .slice((this.offset - 1) * this.pageSize, (this.offset - 1) * this.pageSize + this.pageSize);
    }
  }

  /*
      -Filtring vehicles by category just from the front end
      -why : because If I have already filtred them by Location I will just filter this vehicles in this location which are 
      already present on vehciles array 
  */
  filterVehicleByCategory(categoryId: string) {
    const filtredVehicles = []
    for (const vehicle of this.vehicles) {
      if (vehicle.category.id == categoryId) {
        filtredVehicles.push(vehicle)
      }
    }
    this.vehiclesShown = filtredVehicles;
  }
  filterByName(name: string) {
    const filtredVehicles = []
    for (const vehicle of this.vehicles) {
      //console.log(vehicle);
      if (vehicle.title.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        || vehicle.description.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
        filtredVehicles.push(vehicle)
      }
    }
    this.vehiclesShown = filtredVehicles;
  }
}
