import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Reservation } from '../../models/reservation.model';
import { User } from '../../models/user.model';
import { Vehicle } from '../../models/vehicle.model';




@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  vehicle!: Vehicle
  user:User={
    fullName: '',
    email: '',
    phone: 0
  }
  reservation:Reservation ={
    user: this.user,
    duration: 0,
    location: 0,
    pickUpDate: new Date,
    vehicleId: 0
  }
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state)).subscribe(res => {
        this.vehicle= res.vehicle
        console.log(this.vehicle);
        
        if (!res.vehicle) 
        this.router.navigate(['/shop']) 
      })
  }
  submitReservation(){
    console.log(this.user.email);
    console.log(this.user.phone);
    console.log(this.user.fullName);
    console.log(this.reservation.duration);
    console.log(this.reservation.pickUpDate);
    console.log(this.reservation.vehicleId);

    
  }
}
