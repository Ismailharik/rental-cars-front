import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shop/models/vehicle.model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.css']
})
export class HeaderCarouselComponent implements OnInit {

  vehicles!:Vehicle[]
  constructor(private sharedService:SharedService) { }


  ngOnInit(): void {
    this.getLatestVehicles()
  }
  getLatestVehicles() {
    this.sharedService.getAllVehiclesWithSort().subscribe({
      next: resp => {
        this.vehicles=resp;
        console.log(this.vehicles);
      },
      error: err => { 
        console.log(err) ;
      },
      complete : ()=>{
        //this.refreshCountries()
        }
    })
  
  }

}
