import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleServices } from '../../services/shop.service';


@Component({
  selector: 'app-related-cars',
  templateUrl: './related-cars.component.html',
  styleUrls: ['./related-cars.component.css']
})
export class RelatedCarsComponent implements OnInit {

  @Input() officeId!:string
  vehicles!: Vehicle[]
  constructor(private vehicleServices : VehicleServices) { }

  ngOnInit(): void {
    this.getVehiclesByCategory()
  }
  customOptions: OwlOptions = {
    // loop: true,
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: true,
    // dots: false,
    // navSpeed: 700,
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 30,
    dots: false,
    loop: true,
    nav : true,
    navText : [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
  }

  getVehiclesByCategory(){
    this.vehicleServices.getVehicleByOffice(this.officeId).subscribe({
      next : resp => {
        console.log(resp);
        
            this.vehicles = resp
      },
      error  : err => console.log(err)
    })
  }
}
