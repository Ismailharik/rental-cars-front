import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatepickerServiceInputs } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service';
import { map } from 'rxjs';
import { Office } from '../../models/office.model';
import { Reservation } from '../../models/reservation.model';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleServices } from '../../services/shop.service';




@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  vehicle!: Vehicle
  office!: Office
  offices!: Office[]
  reservation: Reservation = {
    customer: { fullName: '', email: '', phone: '' },
    duration: 0,
    officeId: 0,
    vehicleId: 0,
    pickUpDate:new Date ,
  }
  vehicleImages:any[]=[];


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private vehicleServices: VehicleServices, private fb: FormBuilder) {

  }
  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state)).subscribe(res => {
        this.vehicle = res.vehicle
        console.log(this.vehicle);

        if (!res.vehicle)
          this.router.navigate(['/shop'])
      })

    if(this.vehicle){ // wait untill vehicle completed
      this.vehicleServices.getOfficeById(this.vehicle.officeId).subscribe({
        next: resp => {
          this.office = resp
        },
        error: err => {
          console.log(err);
        }
      })
      
    }

    this.vehicleServices.getAllOffices().subscribe({
      next: resp => {
        this.offices = resp
      },
      error: err => {
        console.log(err);

      }
    })


  }
  submitReservation(phone:string,duration:string,pickUpDate:string) {

    this.reservation.vehicleId = this.vehicle.id
    this.reservation.duration = parseInt(duration)
    this.reservation.customer.phone = phone
    this.reservation.pickUpDate=new Date(pickUpDate)
    this.reservation.officeId=this.office.id
    console.log(this.reservation);
    
    this.vehicleServices.addReservation(this.reservation).subscribe(
      {
        next : resp=>{
          console.log(resp);
        },
        error: err=>{
          console.log(err);
          
        }
      }
    )

  }

}


