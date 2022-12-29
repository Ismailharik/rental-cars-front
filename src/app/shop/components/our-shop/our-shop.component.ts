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
  vehiclesShown!:Vehicle[]
  collectionSize:number=5;
	// collectionSizes = this.vehicles.length;

  constructor(private vehicleServices:VehicleServices) { 
    this.refreshCountries();
  }
  ngOnInit(): void {
    this.getAllVehicles()
//    this.collectionSize = this.vehicles.length
  }

  getAllVehicles(){
    this.vehicleServices.getAllVehicles().subscribe({
      next: resp => {
        this.vehicles=resp;
      },
      error: err => { 
        console.log(err) ;
      }
    })
  }
  findVehiclesByLocations(officeId:string){
    this.vehicleServices.getAllVehiclesByLocation(officeId).subscribe({

      next : resp=>{
        this.vehicles = resp
        console.log(resp);
        this.refreshCountries()
      },
      error : err =>{
        console.log(err);
        
      }
    })
    console.log(event);
      
  }

  /* I should just call my api to give me next page 
    For more details https://ng-bootstrap.github.io/#/components/pagination/overview
  
  */
  refreshCountries(){
      if(this.vehicles){
            this.vehiclesShown=this.vehicles
        .map((cmd:Vehicle, i:number) => ({Id: i + 1, ...cmd}))
        .slice((this.offset - 1) * this.pageSize, (this.offset - 1) * this.pageSize + this.pageSize);
      }
    }
}
